import { Modal } from 'antd'
import { makeAutoObservable, runInAction } from 'mobx'
import { createPeer, disconnectPeer } from './peers'

const wsUrl = `ws://${document.location.hostname}:6502`

class Ws {
  targetId = ''
  user = {} as UserInfo
  users: UserInfo[] = []
  connection = new WebSocket(wsUrl, 'json')
  queue: (() => void)[] = []
  addQueue(fc: () => void) {
    if (this.connection.readyState === 0) {
      this.queue.push(fc)
    } else if (this.connection.readyState === 1) {
      fc()
    }
  }
  send<T extends WsTypes>(type: T, data: WsDataMap[T]['data']) {
    this.addQueue(() => this.connection.send(JSON.stringify({ type, data, id: this.user.id })))
  }
  stream: MediaStream | undefined
  remoteStream: MediaStream | null = null
  async getStreamAndCreatePeer() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })
    createPeer(this.targetId, this.stream, {
      track: (ev) => {
        const stream = ev.streams[0]
        const audioContext = new AudioContext()
        audioContext.createMediaStreamSource(stream).connect(audioContext.destination)
        runInAction(() => {
          this.remoteStream = ev.streams[0]
        })
      },
    })
  }
  constructor() {
    makeAutoObservable(this)
    this.connection.onopen = () => {
      while (this.queue.length) this.queue.shift()!()
    }
    this.connection.onmessage = async (ev) => {
      const { type, data, id } = JSON.parse(ev.data) as WsData
      console.log(id, type, data)
      switch (type) {
        case 'userInfo': {
          runInAction(() => {
            this.user = data
          })
          console.log({ ...this.user })
          break
        }
        case 'userList': {
          runInAction(() => {
            this.users = data.users
          })
          break
        }
        case 'closePeer': {
          disconnectPeer()
          break
        }
        case 'invite': {
          const { fromName } = data
          this.targetId = id
          Modal.confirm({
            content: fromName + '邀请你进行语音通话',
            onOk: async () => {
              console.log('同意请求了')
              await this.getStreamAndCreatePeer()
              ws.send('accessInvite', { targetId: this.targetId })
            },
          })
          break
        }
        case 'accessInvite': {
          await this.getStreamAndCreatePeer()
          break
        }
        case 'videoOffer': {
          // 返回answer
          console.log('video offer 建立中')
          const pc = createPeer()
          const desc = new RTCSessionDescription(data.sdp)
          console.log('desc', desc)
          if (pc.signalingState != 'stable') {
            console.log('不稳定 回滚')
            await Promise.all([
              pc.setLocalDescription({ type: 'rollback' }),
              pc.setRemoteDescription(desc),
            ])
            return
          } else {
            await pc.setRemoteDescription(desc)
          }
          await pc.setLocalDescription(await pc.createAnswer())
          ws.send('videoAnswer', {
            targetId: this.targetId,
            sdp: pc.localDescription!,
          })
          break
        }
        case 'videoAnswer': {
          const pc = createPeer()
          const desc = new RTCSessionDescription(data.sdp)
          await pc.setRemoteDescription(desc)
          break
        }
        case 'newIceCandidate': {
          const pc = createPeer()
          const candidate = new RTCIceCandidate(data.candidate)
          await pc.addIceCandidate(candidate)
          break
        }
      }
    }
  }
}

const ws = new Ws()
export { ws }
