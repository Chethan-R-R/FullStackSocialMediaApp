import { chownSync } from "fs"

export const getPost=async (post_id:string) => {
    const post=await fetch(`http://localhost:3001/posts/${post_id}`)
    if(post.ok)return post.json()
}

export const postList=async (user_id:string)=>{
    const post=await fetch(`http://localhost:3001/posts/list/${user_id}`)

    if(post.ok)return post.json()
    else return undefined
}

export const uploadPost=async (user_id:string,token:string,postdetails:uploadpostdetails)=>{
    const postbody=new FormData()
    postbody.append("user_id",user_id)
    postbody.append("post_picture",postdetails.post_picture)
    postbody.append("post_title",postdetails.posttitleinput)
    const upload=await fetch(`http://localhost:3001/posts/upload`,{
        method:'POST',
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:postbody
    })

    return upload.json()
}

export const deletePost=async (user_id:string,post_id:string,token:string)=>{
    const data=new FormData()
    data.append("user_id",user_id)
    data.append("post_id",post_id)
    const postdelete=await fetch("http://localhost:3001/posts/remove",{
        method:"DELETE",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:data
    })
    return postdelete.json()
}

export const addComment=async (post_id:string,commentor_id:string,comment:string,token:string)=>{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("commentor_id",commentor_id)
    payload.append("comment",comment)
    const postComment=await fetch("http://localhost:3001/posts/addComment",{
        method:"PATCH",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return postComment.json()
}
export const getComments=async (post_id:string)=>{
    const commentsList=await fetch(`http://localhost:3001/posts/comments/${post_id}`)
    return commentsList.json()
}

export const deleteComment=async (post_id:string,comment_id:string,token:string)=>{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("comment_id",comment_id)
    const res=await fetch(`http://localhost:3001/posts/deleteComment`,{
        method:"DELETE",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return res.json()
}

export const likeDislikePost=async (post_id:string,user_id:string,token:string)=>{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("user_id",user_id)
    const res=await fetch("http://localhost:3001/posts/likeDislike",{
        method:"PATCH",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return res.json()
}