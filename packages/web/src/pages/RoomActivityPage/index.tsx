import ReactAudioPlayer from 'react-audio-player'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { reqHouseActive } from '../../api'
const RoomActivityPage = () => {
  const [agentdata, setAgentdata] = useState()
  const navigate = useNavigate()
  const result = []
  useEffect(() => {
    reqHouseActive()
      .then((res: any) => {
        if (res.code === 200) {
          setAgentdata(res.data.drawPanelData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const toDetail = () => {
    navigate('/MyRoom/RoomDetailComponent')
  }
  if (Array.isArray(agentdata)) {
    for (const i in agentdata as any) {
      const currentdata = agentdata[i] as any
      const datatype = currentdata.type
      switch (datatype) {
        case 'IMAGE': {
          const url: any = currentdata.data
          result.push(
            <img
              src={url}
              key={currentdata.id}
              style={{
                position: 'absolute',
                width: currentdata.width,
                height: currentdata.height,
                left: currentdata.left,
                top: currentdata.top,
              }}
            />,
          )
          break
        }
        case 'TEXT': {
          const content: any = currentdata.data
          result.push(
            <p
              key={currentdata.id}
              style={{
                position: 'absolute',
                width: currentdata.width,
                height: currentdata.height,
                left: currentdata.left,
                top: currentdata.top,
                fontSize: currentdata.fontSize,
                color: currentdata.color,
              }}
            >
              {content}
            </p>,
          )
          break
        }
        case 'AUDIO': {
          const url: any = currentdata.data
          result.push(
            <div
              key={currentdata.id}
              style={{
                position: 'absolute',
                width: currentdata.width,
                height: currentdata.height,
                left: currentdata.left,
                top: currentdata.top,
                paddingRight: '30px',
              }}
            >
              <ReactAudioPlayer className="audio" src={url} controls />
            </div>,
          )
          break
        }
        case 'ROOM_CARD': {
          const data: any = currentdata.data
          result.push(
            <div
              key={currentdata.id}
              style={{
                position: 'absolute',
                fontSize: currentdata.fontSize,
                left: currentdata.left,
                top: currentdata.top,
              }}
              onClick={toDetail}
              className="room-card-draw"
            >
              <img src={data.imgURL} alt="房源图片加载错误" />
              <div className="detail-info">
                <h3>
                  {data.roomStructure} {data.listingName}
                </h3>
                <h4>
                  {[data.squaremeter + '平', data.facingType, data.floorLevel + '楼层'].join('/')}
                </h4>
                <div className="keywords">{data.keywords.join('·')}</div>
              </div>
              <div className="price">
                <h3>{data.totalPrice}万</h3>
                <h4>{data.pricing}元/平</h4>
              </div>
            </div>,
          )
          break
        }
        case 'VIDEO': {
          const url: any = currentdata.data
          result.push(
            <div
              key={currentdata.id}
              style={{
                position: 'absolute',
                width: currentdata.width,
                height: currentdata.height,
                left: currentdata.left,
                top: currentdata.top,
              }}
            >
              <video
                src={url}
                style={{ width: currentdata.width, height: currentdata.height }}
                controls={true}
                preload={'auto'}
              />
            </div>,
          )
          break
        }
      }
    }
  }

  return <div>{result}</div>
}
export default RoomActivityPage
