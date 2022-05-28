import React, { Component } from 'react'
import { Card, Avatar, Space } from 'antd-mobile'
const _getProcessedContent = (content: string) => {
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
}

export default function Comment(commentobject: any) {
  const comment = commentobject.commentobject
  return (
    <div className="comment">
      <Card
        title={
          <div className="comment-user">
            <Avatar src="" className="avatar" style={{ '--size': '1rem' }}></Avatar>
            <div className="comment-username">{comment.username}</div>
          </div>
        }
        extra={<div className="extra">{comment.date}</div>}
        style={{ borderRadius: '16px' }}
        className="comment-outlayer"
      >
        <div className="contentContainer">
          <div className="textContainer">
            <h1>选择理由</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: _getProcessedContent(comment.reason),
              }}
            />
            <h1>入住感受</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: _getProcessedContent(comment.feel),
              }}
            />
          </div>

          <div className="imagesContainer">
            <Space wrap>
              {comment.image_list.map((image: string, i: number) => (
                <img key={i} src={image} className="images"></img>
              ))}
            </Space>
          </div>
        </div>
        {/* <span className='comment-createdtime'>
              {this.state.timeString}
            </span> */}
      </Card>
    </div>
  )
}
