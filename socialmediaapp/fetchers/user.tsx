import Login from "@/app/Components/loginOrRegister/Login"

export const Register=async (userDetails:fillUserDetails) => {
    try{

    
    const user=new FormData()
    user.append("firstName",userDetails.firstName)
    user.append("lastName",userDetails.lastName)
    user.append("email",userDetails.email)
    user.append("password",userDetails.password)
    if(userDetails.profile_picture!="")user.append("profile_picture",userDetails.profile_picture)
    user.append("occupation",userDetails.occupation)
    const Register=await fetch(`${process.env.NEXT_PUBLIC_API}/auth/register`,{
        method:"POST",
        body:user
    })
    return Register.json()
}catch(err){
    console.log(err)
}
}

export const LoginUser=async (userDetails:fillUserDetails) => {
    try{
    const user=new FormData()
    user.append("email",userDetails.email)
    user.append("password",userDetails.password)
    
        const Login=await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`,{
        method:"POST",
        body:user
    })
    return Login.json()
}catch(err){
    console.log(err)
}
}
export const getUser=async (user_id:string,token:string) => {
    try{
    const User=await fetch(`${process.env.NEXT_PUBLIC_API}/user/id/${user_id}`,{
        method:"GET",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return User.json()
}catch(err){
    console.log(err)
}
}

export const followUnfollow=async (from_id:string,to_id:string,token:string)=>{
    try{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/${from_id}/followUnfollow/${to_id}`,{
        method:"PATCH",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}catch(err){
    console.log(err)
}
}
export const removefollower=async (from_id:string,to_id:string,token:string)=>{
    try{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/${from_id}/removeFollower/${to_id}`,{
        method:"PATCH",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}catch(err){
    console.log(err)
}
}

export const SearchUser=async (searchtext:string)=>{
    try{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/search/${searchtext}`,{
        method:"GET"
    })
    return res.json()
}catch(err){
    console.log(err)
}
}

export const getUserFeed=async (feed_id:string,token:string)=>{
    try{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/userFeed/${feed_id}`,{
        method:"GET",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}catch(err){
    console.log(err)
}
}

export const getMyFowllowers=async (token:string) => {
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/getmyfollowers`,{
            method:"GET",
            headers:{
                'Authorization':'Bearer '+token
            }
        })
        return res.json()
    }catch(err){
        console.log(err)
    }
}

export const getMyFowllowing=async (token:string) => {
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_API}/user/getmyfollowing`,{
            method:"GET",
            headers:{
                'Authorization':'Bearer '+token
            }
        })
        return res.json()
    }catch(err){
        console.log(err)
    }
}