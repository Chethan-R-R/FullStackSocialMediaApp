'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { redirect } from "next/navigation"
import {  useContext, useEffect, useState } from "react"
import { ChatsList } from "./ChatsList"
const Chats=()=>{
    const context=useContext(LoginRegisterContext)
    console.log(context.userDetails)
  if(context.userDetails._id===""){
    context.handleNav('.profile','.main','.more')
    context.handleInfo("Login to see your Chats")
    redirect('/')
  }
  context.displayLoading(false)
  useEffect(()=>{
  },[])
  return(
    <div className="mainpage">
      <div className='pagetitle'>
        <h1>Chats</h1>
      </div>
      <div className="maincontent">
        <ChatsList allchats={context.userDetails.chats} token={context.token} handleStranger={context.handleStranger}/>
      </div>
    </div>
  )
}
export default Chats