import React from 'react'
import { Avatar, Card, Toast } from 'antd-mobile'
import './style.css'
import comments from '../CommentPageComponent/comments.json'
export default function CommentCardComponent() {
  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域')
  }

  const comment = comments.Comments[0]
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
            <div className="user-name">{comment.username}</div>
            <div className="time-information">{comment.date}</div>
          </div>
        </div>
        <div className="card-content">
          {comment.reason}
          {comment.feel}
        </div>
      </Card>
    </div>
  )
}
