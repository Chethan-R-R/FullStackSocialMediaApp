'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import {  useContext, useEffect, useState } from "react"
import { ChatsList } from "./ChatsList"
import Info2 from "../Components/info2"
import { redirect } from "next/navigation"
const Chats=()=>{
    const context=useContext(LoginRegisterContext)
    if(context.token===null){
      context.handleInfo2("Access denied please Login in profile section")
      redirect('/')
    }
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