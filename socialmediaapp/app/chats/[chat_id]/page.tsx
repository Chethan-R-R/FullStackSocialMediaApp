'use client'
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { getUser } from "@/fetchers/user"
import { redirect } from "next/navigation"
import {   useContext, useEffect, useRef, useState } from "react"

const Chats=({params:{chat_id}}:{params:{chat_id:string}})=>{
    const context=useContext(LoginRegisterContext)
    const socket=context.socket
    console.log(context.userDetails)
  if(context.userDetails._id===""){
    context.handleNav('.profile','.main','.more')
    context.handleInfo("Login to see your Chats")
    redirect('/')
  }
  context.handleNav('.main','.profile','.more')
  const [strangerData,setStrangerData]=useState<strangerDetails>()
  const [message,setMessage]=useState("")
  const [messageList,setMessageList]=useState([<div key={1} style={{display:'none'}}></div>])
  const scroll=useRef<any>()
  
  useEffect(()=>{
     async function getData() {
      context.displayLoading(true)
      const userData:strangerDetails=await getUser(chat_id,context.token)
      context.displayLoading(false)
      setStrangerData(userData)
    }
    getData()
  },[])
  useEffect(()=>{
    if(context.userDetails.chats[chat_id]){
      socket?.emit('gethistoy',{chatId:context.userDetails.chats[chat_id]})
    }
  },[socket])
  useEffect(()=>{
    if(scroll.current){
      scroll.current.scrollTop=scroll.current.scrollHeight
    }
  },[messageList])
  socket?.on('history',(data:any)=>{
    console.log(data)
    const me=context.userDetails._id
    const chatlist=data.chatHistory.chats?.map((chat:{userId:string,message:string})=>{
            if(chat.userId===me){
                return(
                    <div key={chat.userId}className="rightmsg">
                      <div>
                        <h3>{chat.message}</h3>
                      </div>
                    </div>
                )
            }else{
                return(
                    <div key={chat.userId}className="leftmsg">
                        <div>
                        <h3>{chat.message}</h3>
                      </div>
                    </div>
                )
            }
    })
    setMessageList(chatlist)
    
  })
  const [newmsg,setNewMsg]=useState("")
  useEffect(()=>{
    if(newmsg!==""){
    const msg=<div key={chat_id}className="leftmsg">
      <div>
      <h3>{newmsg}</h3>
    </div>
  </div>
      setMessageList(prev=>[...prev,msg])
    }
  },[newmsg])

  socket?.on('message',(data:any)=>{
  
    if(data.id===chat_id){
      setNewMsg(data.message)
    }
  })
  function handleSend(){
    if(message!==""){
      setMessage("")
    socket?.send({receiverId:chat_id,message:message})
    const msg=<div key={context.userDetails._id}className="rightmsg">
    <div>
      <h3>{message}</h3>
    </div>
  </div>
    setMessageList(prev=>[...prev,msg])
    }
  } 
  return(
    <div className="mainpage">
      
      <div className='pagetitle'>
        <h1>Chats</h1>
      </div>
      <div className="maincontent">
        <div className="msglist" ref={scroll}>
        {messageList}
        </div>
      </div>
      <div className="sendmessage">
        <input type="text" id="sendmessage" onChange={e=>setMessage(e.target.value)} value={message} placeholder="Message" />
        <svg id="postmessage" onClick={handleSend}   xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z"/></svg>
      </div>
      <div className="chatingwith">
      <div className="chattingwithprofile">
      <div className="commentor">
              <svg id="egbnuwkhlPS1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M81.867469,17.79201L95.208457,50.000006L81.867467,82.207998L49.65948,95.548982L17.451485,82.207995L4.110501,50.000004L17.451489,17.792007L49.659482,4.451024L81.867469,17.79201Z" transform="matrix(1.276858 0 0-1.276858-13.748627 113.842903)" fill="none" stroke="#00007f" stroke-width="25"/><path d="M81.867469,17.79201L95.208457,50.000006L81.867467,82.207998L49.65948,95.548982L17.451485,82.207995L4.110501,50.000004L17.451489,17.792007L49.659482,4.451024L81.867469,17.79201Z" transform="matrix(1 0 0-1-.000003 100.000003)" fill="none" stroke="#0f0" stroke-width="4"/></svg>
              <img id="commentorprofile" src={`http://localhost:3001/uploads/${strangerData?.profile_picture}`} />
      </div>
      </div>
        <div className="chatingwithdetails">
          <div id="chatwithname">
            <h3>{strangerData?.firstName+" "+strangerData?.lastName}</h3>
          </div>
          <div id="chatwithoccupation">
            <h4>{strangerData?.occupation}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Chats