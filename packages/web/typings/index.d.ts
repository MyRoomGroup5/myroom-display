type Data<T extends string, D> = {
  type: T
  id: string
  data: D
}
type UserType = 'agent' | 'user'
type UserInfo = {
  username: string
  id: string
  type: UserType
}

type WsDataMap = {
  userInfo: Data<'userInfo', UserInfo>
  userList: Data<
    'userList',
    {
      users: UserInfo[]
    }
  >
  rename: Data<
    'rename',
    {
      username: string
    }
  >
  changeType: Data<
    'changeType',
    {
      type: UserType
    }
  >
  closePeer: Data<'closePeer', { targetId: string }>
  invite: Data<
    'invite',
    {
      targetId: string
      fromName: string
    }
  >
  accessInvite: Data<
    'accessInvite',
    {
      targetId: string
    }
  >
  videoOffer: Data<
    'videoOffer',
    {
      targetId: string
      sdp: RTCSessionDescription
    }
  >
  videoAnswer: Data<
    'videoAnswer',
    {
      targetId: string
      sdp: RTCSessionDescription
    }
  >
  newIceCandidate: Data<
    'newIceCandidate',
    {
      targetId: string
      candidate: RTCIceCandidate
    }
  >
}

type WsTypes = keyof WsDataMap
type WsData = WsDataMap[WsTypes]
