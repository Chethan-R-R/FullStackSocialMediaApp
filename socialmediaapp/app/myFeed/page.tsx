'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { getUserFeed } from "@/fetchers/user"
import { redirect } from "next/navigation"
import {  useContext, useEffect, useState } from "react"
import { DisplaySinglePost } from "../post/[user_id]/[post_id]/DisplaySinglePost"
import { likeDislikePost } from "@/fetchers/post"
const MyFeed=()=>{
  const context=useContext(LoginRegisterContext)
  if(context.userDetails._id===""){
    context.handleNav('.profile','.main','.more')
    context.handleInfo("Login to see your followers")
    redirect('/')
  }
  const [content,setContent]=useState(true)
  const [feeds,setFeeds]=useState([<div key={0} className="nofeed"><h2>Posts of people you are following will appear here</h2></div>])
  async function handleLike(post_id:string) {
    context.displayLoading(true)
      const res=await likeDislikePost(post_id,context.userDetails._id,context.token)
      context.displayLoading(false)
    context.refreshUser()
    context.refreshStranger()
    
  }
  useEffect(()=>{
    async function handleUserFeed() {
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
    handleUserFeed()
  },[])
  return(
    <div className="mainpage">
      <div className='pagetitle'>
        <h1>My Feed</h1>
      </div>
      <div className="maincontent">
        {feeds}
      </div>
    </div>
  )
}

export default MyFeed