import { ws } from '.'
import { runInAction } from 'mobx'

let memoPc: RTCPeerConnection | null = null

type PeerEvent = {
  [K in keyof RTCPeerConnectionEventMap]?: (ev: RTCPeerConnectionEventMap[K]) => void
}

function createPeer(targetId = '', stream?: MediaStream, events: PeerEvent = {}) {
  if (memoPc) return memoPc
  console.log('创建peer')
  const mountPeerEvent = (peer: RTCPeerConnection, evMap: PeerEvent) => {
    for (const [k, v] of Object.entries(evMap) as any) {
      peer.addEventListener(k, v)
    }
  }

  const pc = new RTCPeerConnection()
  mountPeerEvent(pc, events)
  pc.onnegotiationneeded = async () => {
    const offer = await pc.createOffer()
    if (pc.signalingState !== 'stable') {
      console.log('当前连接不稳定 请稍后重试')
      return
    }
    await pc.setLocalDescription(offer)
    ws.send('videoOffer', { targetId, sdp: pc.localDescription! })
  }
  pc.onicecandidate = (ev) => {
    if (ev.candidate) {
      ws.send('newIceCandidate', { targetId, candidate: ev.candidate })
    }
  }
  pc.oniceconnectionstatechange = () => {
    switch (pc.iceConnectionState) {
      case 'closed':
      case 'failed':
      case 'disconnected':
        console.log('关闭连接 by oniceconnectionstatechange')
        disconnectPeer()
        break
    }
  }
  pc.onsignalingstatechange = () => {
    switch (pc.signalingState) {
      case 'closed':
        console.log('关闭连接 by onsignalingstatechange')
        disconnectPeer()
        break
    }
  }
  console.log('peers stream: ', stream)
  stream?.getTracks().forEach((t) => pc.addTransceiver(t, { streams: [stream] }))

  return (memoPc = pc)
}

function disconnectPeer() {
  if (memoPc) {
    console.log('关闭连接')
    ws.send('closePeer', { targetId: ws.targetId })
    memoPc.getTransceivers().forEach((t) => t.stop())
    memoPc.close()
    runInAction(() => {
      ws.remoteStream = null
    })
    memoPc = null
  }
}

export { createPeer, disconnectPeer }
