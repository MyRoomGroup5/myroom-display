import Comment from './Comment'
import React, { Component } from 'react'
export default function CommentList(comments: any) {
  const commentlist = comments.comments
  return (
    <div>
      {commentlist.map((e: object, i: number) => (
        <Comment key={i} commentobject={e}></Comment>
      ))}
    </div>
  )
}
