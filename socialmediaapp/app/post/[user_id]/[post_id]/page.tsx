'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { redirect } from "next/navigation"
import {  useContext, useEffect, useState } from "react"
import { DisplaySinglePost } from "./DisplaySinglePost"

const Post=({params:{user_id,post_id}}:{params:{user_id:string,post_id:string}})=>{
  const context=useContext(LoginRegisterContext)
  if(context.userDetails._id===""){
    context.handleNav('.profile','.main','.more')
    context.handleInfo("Login to see your followers")
    redirect('/')
  }
  context.displayLoading(false)
    
    const [content,setContent]=useState(true)

    
    if(context.token!="" && content ){
      return(
        <div className="mainpage">
        <div className='pagetitle'>
          <h1>Post</h1>
        </div>
        <div className="maincontent">
        <DisplaySinglePost  post_id={post_id} setContent={setContent} />
        </div>
      </div>
      )
    }else if(!content){
      return(
        <div className="mainpage">
        <div className='pagetitle'>
          <h1>Post</h1>
        </div>
        <div className="maincontent">
          <h2>Post Deleted</h2>
        </div>
        </div>
      )
    }
    else{
      return(
        <div className="mainpage">
        <div className='pagetitle'>
          <h1>Post</h1>
        </div>
        <div className="maincontent">
          <h2>Access denied</h2>
        </div>
        </div>
      )
    }
  }
  
  export default Post