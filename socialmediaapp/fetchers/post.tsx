
export const getPost=async (post_id:string) =>{
    try{
    const post=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${post_id}`)
    if(post.ok)return post.json()
}catch(err){
    console.log(err)
}
}


export const postList=async (user_id:string) =>{
    try{
    const post=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/list/${user_id}`)

    if(post.ok)return post.json()
    else return undefined
}catch(err){
    console.log(err)
}
}

export const uploadPost=async (user_id:string,token:string,postdetails:uploadpostdetails) =>{
    try{
    const postbody=new FormData()
    postbody.append("user_id",user_id)
    postbody.append("post_picture",postdetails.post_picture)
    postbody.append("post_title",postdetails.posttitleinput)
    const upload=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/upload`,{
        method:'POST',
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:postbody
    })

    return upload.json()
}catch(err){
    console.log(err)
}
}

export const deletePost=async (user_id:string,post_id:string,token:string) =>{
    try{
    const data=new FormData()
    data.append("user_id",user_id)
    data.append("post_id",post_id)
    const postdelete=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/remove`,{
        method:"DELETE",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:data
    })
    return postdelete.json()
}catch(err){
    console.log(err)
}
}

export const addComment=async (post_id:string,commentor_id:string,comment:string,token:string) =>{
    try{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("commentor_id",commentor_id)
    payload.append("comment",comment)
    const postComment=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/addComment`,{
        method:"PATCH",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return postComment.json()
}catch(err){
    console.log(err)
}
}
export const getComments=async (post_id:string) =>{
    try{
    const commentsList=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/comments/${post_id}`)
    return commentsList.json()
}catch(err){
    console.log(err)
}
}

export const deleteComment=async (post_id:string,comment_id:string,token:string) =>{
    try{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("comment_id",comment_id)
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/deleteComment`,{
        method:"DELETE",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return res.json()
}catch(err){
    console.log(err)
}
}

export const likeDislikePost=async (post_id:string,user_id:string,token:string) =>{
    try{
    const payload=new FormData()
    payload.append("post_id",post_id)
    payload.append("user_id",user_id)
    const res=await fetch(`${process.env.NEXT_PUBLIC_API}/posts/likeDislike`,{
        method:"PATCH",
        headers:{
            'Accept':'*/*',
            'Authorization':'Bearer '+token
        },
        body:payload
    })
    return res.json()
}catch(err){
    console.log(err)
}
}