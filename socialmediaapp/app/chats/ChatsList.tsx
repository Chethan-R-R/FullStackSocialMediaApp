import { getUser } from "@/fetchers/user"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { LoginRegisterContext } from "../contexts/ContextCreate"
import Info2 from "../Components/info2"
import { redirect } from "next/navigation"

export const ChatsList=({allchats,token,handleStranger}:{allchats:Map<string,string>,token:string,handleStranger:Function})=>{
    const [chatslist,setChatsList]=useState([])
    const context=useContext(LoginRegisterContext)

    if(context.token===null){
        context.handleInfo2("Access denied please Login in profile section")
        redirect('/')
      }
    useEffect(()=>{
        context.handleInfo2("No chat history found. To start a conversation, find people, open their profile, and tap on Message")
    },[])

    useEffect(()=>{
        const list=Object.keys(allchats).map(async (key)=>{
            context.displayLoading(true)
            const user:strangerDetails=await getUser(key,token)
            context.displayLoading(false)
            return(
                <div key={key} className="singlechat">
                <div className="chatprofile" onClick={()=>handleStranger(2,key)}>
                <svg id="eTwIuyVkJzQ1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 295 295" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M20.778305,256.389028L39.31982,269.136471h38.739479l10.045165,10.045165h160.271808l35.642064-35.582913-.059152-160.271811-10.045166-10.045165-.000001-38.73948-17.7996-13.002484-38.73948-.000001L207.27062,11.435466h-160.954576L10.733132,47.077529v160.467701l10.045165,10.104316.000008,38.739482Z" transform="matrix(1.11816 0 0 1.11816-17.413909-17.169655)" paint-order="stroke fill markers" fill="none" stroke="#000" stroke-width="50"/><path d="M21.461072,271.48635v-219.160769L39.282104,34.50455L57.103135,16.683518h219.160769" transform="matrix(0 1 1 0-6.009529-10.025603)" fill="none" stroke="#00f" stroke-width="8"/><path d="M21.461072,271.48635v-219.160769L39.282104,34.50455L57.103135,16.683518h219.160769" transform="matrix(0-1-1 0 300.701854 300.701858)" fill="none" stroke="#00f" stroke-width="8"/><path d="M21.461072,271.682243l10.045165-10.045165v-38.739479L21.401921,212.793283l.059151,58.88896Z" transform="matrix(-1 0 0 1 305.420259-188.355331)" paint-order="stroke fill markers" fill="#1e1ebc" stroke="#00f" stroke-width="8"/><path d="M21.461072,271.682243l10.045165-10.045165v-38.739479L21.401921,212.793283l.059151,58.88896Z" transform="matrix(0-1 1 0-183.577779 300.642708)" paint-order="stroke fill markers" fill="#1e1ebc" stroke="#00f" stroke-width="8"/><path d="M21.461072,271.682243l10.045165-10.045165v-38.739479L21.401921,212.793283l.059151,58.88896Z" transform="translate(-10.727932-5.24805)" paint-order="stroke fill markers" fill="#1e1ebc" stroke="#00f" stroke-width="8"/><path d="M21.461072,271.682243l10.045165-10.045165v-38.739479L21.401921,212.793283l.059151,58.88896Z" transform="matrix(0 1 1 0-5.522655-9.966452)" paint-order="stroke fill markers" fill="#1e1ebc" stroke="#00f" stroke-width="8"/></svg>
                <img id="followerimg" src={`${process.env.NEXT_PUBLIC_API}/uploads/${user.profile_picture}`} />
                </div>
                <Link href={`chats/${key}`} className="chatname" onClick={()=>context.displayLoading(true)}>
                    <h2>{user.firstName+" "+user.lastName}</h2>
                </Link>
                <svg id="eJriXBWNQ9h1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 250" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M500,249.644595h-243.414945l-33.201831-33.201831v-41.442765l-68.779205-68.779206v45.261866l20.16423,20.16423v52.013664l48.847969,48.847969l248.058952.000002L500,249.644595Z" transform="translate(-92.144947-54.470708)" fill="#bdffc0" stroke="#00ff0c" stroke-width="4"/><path d="M154.604027,106.220794L120.680414,72.297181h-53.20144" transform="translate(-92.144955-54.470709)" fill="none" stroke="#00ff0c" stroke-width="4"/><path d="M689.652415,226.547671h116.206408l20.931586,20.931587h79.395682l-22.736034,22.736035h-150.490907l-43.306735-43.667622Z" transform="translate(-89.257837-54.470704)" fill="#bdffc0" stroke="#00ff0c" stroke-width="4"/><path d="M906.186094,247.479263h57.742314" transform="translate(-92.144955-54.470709)" fill="none" stroke="#00ff0c" stroke-width="4"/><path d="M735.846267,226.547676h-105.379726l-20.20981,23.09692L500,248.92282" transform="translate(-92.144954-54.470709)" fill="none" stroke="#00ff0c" stroke-width="4"/></svg>

            </div>
            )
        })
        //@ts-ignore
        setChatsList(list)
        
    },[allchats])
    return(
        <div className="chatlist">
            {
                chatslist.length===0?<Info2 />:chatslist
            }
        </div>
    )
}