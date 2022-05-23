import React from 'react'
import { Avatar, Card, Toast } from 'antd-mobile'
import './style.css'

export default function CommentCardComponent() {
  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域')
  }
  return (
    <div className="cardblock">
      <Card
        title="小区点评"
        extra="查看全部>"
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
      >
        {/* <div className='extra-information'>附加信息</div> */}
        <div className="user-information">
          <Avatar src="" />
          <div className="user-information-text">
            <div className="user-name">ZTL</div>
            <div className="time-information">2020-02-05</div>
          </div>
        </div>
        <div className="card-content">
          哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇
          哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇
          {/* 显示一百字 */}
        </div>
      </Card>
    </div>
  )
}
