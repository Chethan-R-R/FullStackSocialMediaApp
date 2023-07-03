'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { getUserFeed } from "@/fetchers/user"

import {  useContext, useEffect, useState } from "react"
import { DisplaySinglePost } from "../post/[user_id]/[post_id]/DisplaySinglePost"
import { likeDislikePost } from "@/fetchers/post"
import Info2 from "../Components/info2"
import { redirect } from "next/navigation"
const MyFeed=()=>{
  const context=useContext(LoginRegisterContext)
  if(context.token===null){
    context.handleInfo2("Access denied please Login in profile section")
    redirect('/')
  }

  
  const [content,setContent]=useState(true)
  const [feeds,setFeeds]=useState<JSX.Element[]>([])

  useEffect(()=>{
    async function handleUserFeed() {
      if(context.token!==null){
        context.displayLoading(true)
      const feedsData:Feed=await getUserFeed(context.userDetails.feeds_id,context.token)
      context.displayLoading(false)
      const feedsList=feedsData.feeds.map(feed=>{
        return <div key={feed}>
          <DisplaySinglePost key={feed} post_id={feed} setContent={setContent} />
        </div>
      })
      setFeeds(feedsList)
      }
    }
    handleUserFeed()
    context.handleInfo2("The post uploaded by people you are following will appear here")
  },[])
  return(
    <div className="mainpage">
      <div className='pagetitle'>
        <h1>My Feed</h1>
      </div>
      <div className="maincontent">
        {
          feeds.length!=0?feeds:<Info2/>
        }
      </div>
    </div>
  )
}

export default MyFeed