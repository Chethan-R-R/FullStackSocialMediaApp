'use client'
import {io,Socket} from 'socket.io-client'
import { ChangeEvent, useEffect, useState } from "react"
import { LoginRegisterContext } from "./ContextCreate"
import {LoginUser, Register, followUnfollow, getUser, removefollower} from "@/fetchers/user"
import { uploadPost } from "@/fetchers/post"

const ProvideContext=({children}:{children:React.ReactNode})=>{
    
    const [Loading,setLoading]=useState(false)
    const [token,setToken]=useState("")
    const [userDetails,setUserDetails]=useState({
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        profile_picture: "",
        occupation: "",
        followers: [""],
        following: [""],
        posts:[""],
        feeds_id:"",
        chats:new Map()
    })
    
    const [strangerDetails,setstrangerDetials]=useState({
        _id:"",
        firstName: "Loading...",
        lastName: "",
        email: "",
        profile_picture: "profile.svg",
        occupation: "",
        followers: [],
        following: [],
        posts:[],
        feeds_id:""})

    const [ProfileOrLogin,setProfile]=useState(0)
    const [infolist,setInfolist]=useState<string[]>("Hello Stranger Wellcome...!".split(" "))
    const [infolist2,setInfolist2]=useState<string[]>("All the users data will autometically deleted every 24 hours".split(" "))
    const [displayRegister,setDisplayRigister]=useState<boolean | undefined>()
    const inputsIndex=[
        {typeId1:"firstName",type1:"text",label1:"First Name",typeId2:"lastName",type2:"text",label2:"Last Name",buttonName:"Next",buttonId:1},
        {typeId1:"email",type1:"text",label1:"Email",typeId2:"password",type2:"text",label2:"Password",buttonName:"Next",buttonId:2},
        {typeId1:"profile_picture",type1:"file",label1:"Profile Picture",typeId2:"occupation",type2:"text",label2:"Occupation",buttonName:"Submit",buttonId:3},
        {typeId1:"email",type1:"text",label1:"Email",typeId2:"password",type2:"text",label2:"Password",buttonName:"Submit",buttonId:4}
    ]
    const [inputContent,setInputContent]=useState(inputsIndex[0])
    const  [registerDetails,setregisterDetails]=useState<fillUserDetails>({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        profile_picture:"",
        occupation:""
    })
    const [uploadpostdetails,setUploadPost]=useState<uploadpostdetails>({
            post_picture:"",
            posttitleinput:""
        })

    const [socket,setSocket]=useState<Socket>()
    useEffect(()=>{
        setTimeout(()=>{if(displayRegister===undefined){
            setInfolist("Please Register if not yet and Login to Follow other people to watch their Post".split(" "))
        }},3000)
        
    },[displayRegister])
    useEffect(()=>{
        const SocketData=io('http://localhost:3001',{
            auth:{token:token}
        })
        setSocket(SocketData)
    },[token])

    socket?.on("refresh",()=>{
        refreshUser()
    })

    function handleLoginRegister(isRegister:boolean){
        if(isRegister){
            setInputContent(inputsIndex[0])
            setDisplayRigister(true)
            setInfolist("Plese enter your First Name and Last Name and it is required".split(" "))
        }
        else {
            setDisplayRigister(false)
            setInfolist("Plese enter your email and password".split(" "))
            setInputContent(inputsIndex[3])
        }
    }
    function inputChange(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const temp=e.target.files[0]
            setregisterDetails(prev=>(
                {...prev,[e.target.id]:temp}
            ))
            
        }else{
            setregisterDetails(prev=>(
                {...prev,[e.target.id]:e.target.value}
            ))
        }
        
    }
    function postUploadChange(e:ChangeEvent<HTMLInputElement>){
        
        if(e.target.files){
            const temp=e.target.files[0]
            setUploadPost(prev=>(
                {...prev,[e.target.id]:temp}
            ))
            
        }else{
            setUploadPost(prev=>(
                {...prev,[e.target.id]:e.target.value}
            ))
        }
        
    }
    function handleNav(addZ:string,removez:string,removez2:string){
        const add=document.querySelector(addZ) as HTMLElement
        const remove1=document.querySelector(removez) as HTMLElement
        const remove2=document.querySelector(removez2) as HTMLElement
        if(add)add.style.zIndex='2'
        if(remove1)remove1.style.zIndex='1'
        if(remove2)remove2.style.zIndex='1'
    }   
    async function handlePostUpload(){
        
        if(uploadpostdetails.post_picture==="")setInfolist2("Please select post to upload".split(" "))
        else{
            displayLoading(true)
            const res=await uploadPost(userDetails._id,token,uploadpostdetails)
            displayLoading(true)
            setInfolist("Post Uploaded".split(" "))
            if(res){
                const user_get=await getUser(userDetails._id,token)
                setUserDetails(user_get)
                setTimeout(()=>handleNav('.profile','.main','.more'),2000)
            }
        }
    }
    async function handleSubmit(){
        if(displayRegister){
            displayLoading(true)
            const res=await Register(registerDetails)
            displayLoading(false)
            if(res.error){
                setInfolist("Email is already Registered".split(' '))
                setInputContent(inputsIndex[1])
                
            }else{
                setInfolist("Registration Successfull...! now you can LogIn".split(" "))
                setDisplayRigister(undefined)
            }
            
        }else{
            await LoginUser(registerDetails)
            .then(result=>{
                if(result.token){
                    setUserDetails(result.user_details)
                    if(result.user_details){
                        setToken(result.token)
                        setInfolist(`Wellcome back ${result.user_details.firstName} ${result.user_details.lastName}`.split(" "))
                        setTimeout(()=>setProfile(1),2500)
                    }
                }else{
                    setInfolist(result.msg.split(" "))
                }
            })
        }
    }
    function clickNext(buttonId:number){
        if(buttonId!=3 && buttonId!=4 && registerDetails[`${inputsIndex[buttonId-1].typeId1}` as keyof typeof registerDetails]!="" && registerDetails[`${inputsIndex[buttonId-1].typeId2}` as keyof typeof registerDetails]!=""){
            if(buttonId===1)setInfolist("Plese enter your Email and passord which is further used as LogIn credentials".split(" "))
            else if(buttonId===2)setInfolist("You can upload profile photo and enter occupation,both are optional".split(" "))
            setInputContent(inputsIndex[buttonId])
        }else if(buttonId===3){
            handleSubmit()
        }else if(buttonId===4 && registerDetails[`${inputsIndex[buttonId-1].typeId1}` as keyof typeof registerDetails]!="" && registerDetails[`${inputsIndex[buttonId-1].typeId2}` as keyof typeof registerDetails]!=""){
            handleSubmit()
        }
        else{
            setInfolist("The following input cannot be empty".split(" "))
        }
        
    }

    function handleInfo(information:string){
        setTimeout(()=>{setInfolist(information.split(" "))},240)
        
    }
    function handleInfo2(information:string){
        setTimeout(()=>{setInfolist2(information.split(" "))},240)
    }
    async function followUnfollowUser(user_id:string){
        displayLoading(true)
        const res=await followUnfollow(userDetails._id,user_id,token)
        const user_get=await getUser(userDetails._id,token)
        setUserDetails(user_get)
        const stranger_get=await getUser(strangerDetails._id,token)
        setstrangerDetials(stranger_get)
        displayLoading(false)
    }
    async function removeFollower(user_id:string){
        displayLoading(true)
        const res=await removefollower(userDetails._id,user_id,token)
        const user_get=await getUser(userDetails._id,token)
        setUserDetails(user_get)
        displayLoading(false)
    }
    async function handleStranger(strangerOrMe:number,user_id:string){
        setProfile(strangerOrMe)
        
        if(strangerOrMe===2){
            displayLoading(true)
            handleNav('.profile','.main','.more')
            const userData=await getUser(user_id,token)
            setstrangerDetials(userData)
            displayLoading(false)
        }
        else {
            setProfile(strangerOrMe)
            handleNav('.main','.profile','.more')
        }
    }
    async function refreshUser() {
        displayLoading(true)
        const user_get=await getUser(userDetails._id,token)
        setUserDetails(user_get)
        displayLoading(false)
    }
    async function refreshStranger() {
        if(strangerDetails._id!==""){
            displayLoading(true)
            const user_get=await getUser(strangerDetails._id,token)
            setstrangerDetials(user_get)
            displayLoading(false)
        }
    }  

    function displayLoading(display:boolean){
        setLoading(display)
    }

    return(
        <LoginRegisterContext.Provider value={{ProfileOrLogin,
        infolist,
        displayRegister,
        handleLoginRegister,
        inputContent,
        inputChange,
        clickNext,
        registerDetails,
        userDetails,
        uploadpostdetails,
        postUploadChange,
        handlePostUpload,
        handleInfo,
        handleNav,
        token,
        followUnfollowUser,
        removeFollower,
        strangerDetails,
        handleStranger,
        refreshUser,
        refreshStranger,
        socket,
        Loading,
        displayLoading,
        infolist2,
        handleInfo2
        }}>
            {children}
        </LoginRegisterContext.Provider>
    )
}
export default ProvideContext