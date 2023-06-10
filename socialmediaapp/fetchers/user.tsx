import Login from "@/app/Components/loginOrRegister/Login"

export const Register=async (userDetails:fillUserDetails) => {
    
    const user=new FormData()
    user.append("firstName",userDetails.firstName)
    user.append("lastName",userDetails.lastName)
    user.append("email",userDetails.email)
    user.append("password",userDetails.password)
    if(userDetails.profile_picture!="")user.append("profile_picture",userDetails.profile_picture)
    user.append("occupation",userDetails.occupation)
    const Register=await fetch("http://localhost:3001/auth/register",{
        method:"POST",
        body:user
    })
    return Register.json()
}

export const LoginUser=async (userDetails:fillUserDetails) => {
    const user=new FormData()
    user.append("email",userDetails.email)
    user.append("password",userDetails.password)
    
        const Login=await fetch("http://localhost:3001/auth/login",{
        method:"POST",
        body:user
    })
    return Login.json()
}
export const getUser=async (user_id:string,token:string) => {
    const User=await fetch(`http://localhost:3001/user/id/${user_id}`,{
        method:"GET",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return User.json()
}

export const followUnfollow=async (from_id:string,to_id:string,token:string)=>{
    const res=await fetch(`http://localhost:3001/user/${from_id}/followUnfollow/${to_id}`,{
        method:"PATCH",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}
export const removefollower=async (from_id:string,to_id:string,token:string)=>{
    const res=await fetch(`http://localhost:3001/user/${from_id}/removeFollower/${to_id}`,{
        method:"PATCH",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}

export const SearchUser=async (searchtext:string)=>{
    const res=await fetch(`http://localhost:3001/user/search/${searchtext}`,{
        method:"GET"
    })
    console.log(res)
    return res.json()
}

export const getUserFeed=async (feed_id:string,token:string)=>{
    console.log(feed_id)
    const res=await fetch(`http://localhost:3001/user/userFeed/${feed_id}`,{
        method:"GET",
        headers:{
            'Authorization':'Bearer '+token
        }
    })
    return res.json()
}