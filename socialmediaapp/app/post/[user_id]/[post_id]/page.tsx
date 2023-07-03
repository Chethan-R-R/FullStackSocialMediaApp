'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"

import {  useContext, useEffect, useState } from "react"
import { DisplaySinglePost } from "./DisplaySinglePost"
import Info2 from "@/app/Components/info2"
import { redirect } from "next/navigation"

const Post=({params:{user_id,post_id}}:{params:{user_id:string,post_id:string}})=>{
  const context=useContext(LoginRegisterContext)
  if(context.token===null){
    context.handleInfo2("Access denied please Login in profile section")
    redirect('/')
  }
    
    const [content,setContent]=useState(true)

    
    if(context.token && content ){
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
      context.handleInfo2("Post Deleted Successfully")
      return(
        <div className="mainpage">
        <div className='pagetitle'>
          <h1>Post</h1>
        </div>
        <div className="maincontent">
        <Info2 />
        </div>
        </div>
      )
    }
  }
  
  export default Post