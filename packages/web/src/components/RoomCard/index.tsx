import React from 'react'
import { Card } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
const RoomCard = () => {
  const navigate = useNavigate()
  const back = () => {
    navigate(`/MyRoom/RoomDetailPage`)
  }
  return (
    <Card style={{ padding: '0.3rem' }} onClick={back}>
      <img
        src="/room.webp"
        alt="房源卡片展示"
        style={{ width: '3.5rem', height: '2.5rem', float: 'left', paddingRight: '0.4rem' }}
      />
      <div>
        <div style={{ fontSize: '0.4rem', fontWeight: '700', paddingBottom: '0.2rem' }}>
          2室1厅 田家园新村（四区）
        </div>
        <div style={{ paddingBottom: '0.2rem' }}>72平/南北/高楼层/敞亮</div>
        <div style={{ fontWeight: '700', paddingBottom: '0.2rem' }}>南北通透 绿化率高</div>
        <div>
          <span style={{ fontSize: '0.4rem', paddingRight: '0.2rem', color: 'red' }}>150万</span>{' '}
          20,833元/平
        </div>
      </div>
    </Card>
  )
}

export default RoomCard
