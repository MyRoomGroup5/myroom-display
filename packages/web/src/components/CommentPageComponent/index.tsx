import React from 'react'
import CommentList from './CommentList'
import './style.css'
import comments from './comments.json'
export default function CommentPageComponent() {
  return (
    <div className="wrapper">
      <CommentList comments={comments.Comments}></CommentList>
    </div>
  )
}
