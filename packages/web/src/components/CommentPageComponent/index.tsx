import React from 'react'
import CommentList from './CommentList'
import './style.css'
import comments from './comments.json'
export default function CommentPageCompnent() {
  return (
    <div className="wrapper">
      <CommentList comments={comments.Comments}></CommentList>
    </div>
  )
}
