'use client'
import { useContext, useEffect, useState } from "react"
import { LoginRegisterContext } from "../../contexts/ContextCreate"

import { addComment, deleteComment, getComments, getPost } from "@/fetchers/post"
import { Singlecomment } from "./SingleComment"
import Info2 from "@/app/Components/info2"
import { redirect } from "next/navigation"

const Comments=({params:{post_id}}:{params:{post_id:string}})=>{
    const context=useContext(LoginRegisterContext)
    if(context.token===null){
        context.handleInfo2("Access denied please Login in profile section")
      redirect('/')
    }
  
    const [refreshComments,setRefresh]=useState(true)
    const [commentsList,setCommentsList]=useState<JSX.Element[]>()
    useEffect(()=>{
      async function getPostdata() {
        context.displayLoading(true)
        const CommenstData:comment[]=await getComments(post_id)
        const list=CommenstData.map(comment=>(<Singlecomment key={comment.comment_id} comment={comment} userId={context.userDetails._id} deleteComment={DeleteComment}/>))
        context.displayLoading(false)
        setCommentsList(list) 
      }getPostdata()
    },[post_id,refreshComments])

    const [userComment,setComment]=useState("")

    async function AddComment() {
  
      if(userComment!="" && context.token){
        context.displayLoading(true)
        const res=await addComment(post_id,context.userDetails._id,userComment,context.token)
        context.displayLoading(false)
        setRefresh(prev=>!prev)
        setComment("")
      }
      
    }

    async function DeleteComment(comment_id:string) {
      if(context.token!==null){
        context.displayLoading(true)
      const res=await deleteComment(post_id,comment_id,context.token)
      context.displayLoading(false)
      setRefresh(prev=>!prev)
      
      }
    }
    return(
      <div className="mainpage">
      <div className='pagetitle'>
        <h1>Comments</h1>
      </div>
      <div className="commentslist">
      {commentsList}
    </div>
    <div className="addcomment">
      <input type="text" id="addcomment" onChange={e=>setComment(e.target.value)} value={userComment} placeholder="Add Comment" />
      <svg id="postcomment" onClick={AddComment} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z"/></svg>
    </div>
    </div>
    )

}

export default Comments