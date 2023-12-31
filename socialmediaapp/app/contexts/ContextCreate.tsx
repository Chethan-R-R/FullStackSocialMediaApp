import { ChangeEventHandler, createContext } from "react"
import { Socket } from "socket.io-client"
type providertype={
    ProfileOrLogin:number,
    infolist:string[],
    displayRegister:undefined|boolean,
    handleLoginRegister:Function,
    inputContent:{typeId1:string,type1:string,label1:string,typeId2:string,type2:string,label2:string,buttonName:string,buttonId:number},
    inputChange:ChangeEventHandler<HTMLInputElement> | undefined,
    clickNext:Function,
    registerDetails:fillUserDetails,
    userDetails:userDetails,
    uploadpostdetails:uploadpostdetails,
    postUploadChange:ChangeEventHandler<HTMLInputElement> | undefined,
    handlePostUpload:Function,
    handleInfo:Function,
    handleNav:Function,
    token:string|null,
    followUnfollowUser:Function,
    removeFollower:Function,
    strangerDetails:strangerDetails,
    handleStranger:Function,
    refreshUser:Function,
    refreshStranger:Function,
    socket:Socket|undefined,
    Loading:boolean,
    displayLoading:Function,
    infolist2:string[],
    handleInfo2:Function
}
const LoginRegisterContext=createContext<providertype>({ProfileOrLogin:0,infolist:[""],
displayRegister:undefined,
handleLoginRegister:Function,
inputContent:{typeId1:"firstName",type1:"text",label1:"First Name",typeId2:"lastName",type2:"text",label2:"Last Name",buttonName:"Next",buttonId:1},
inputChange:undefined,
clickNext:Function,registerDetails:{firstName:"",
lastName:"",
email:"",
password:"",
profile_picture:"",
occupation:""},
userDetails:{_id: "",
firstName: "",
lastName: "",
email: "",
profile_picture: "",
occupation: "",
followers: [""],
following: [""],
posts:[""],
feeds_id:"",
chats:([])},
uploadpostdetails:{post_picture:"",posttitleinput:""},
postUploadChange:undefined,
handlePostUpload:Function,
handleInfo:Function,
handleNav:Function,
token:null,
followUnfollowUser:Function,
removeFollower:Function,
strangerDetails:{_id: "",
firstName: "",
lastName: "",
email: "",
profile_picture: "",
occupation: "",
followers: [""],
following: [""],
posts:[""],
feeds_id:""},
handleStranger:Function,
refreshUser:Function,
refreshStranger:Function,
socket:undefined,
Loading:false,
displayLoading:Function,
infolist2:[""],
handleInfo2:Function
})

export {LoginRegisterContext}