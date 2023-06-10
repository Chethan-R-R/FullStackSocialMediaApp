

type fillUserDetails={
    firstName:string,
        lastName:string,
        email:string,
        password:string,
        profile_picture:File|string,
        occupation:string
}
type userDetails={_id: string,
firstName: string,
lastName: string,
email: string,
profile_picture: string,
occupation: string,
followers: string[],
following: string[],
posts:string[]
feeds_id:string,
chats:Map
}
type strangerDetails={_id: string,
    firstName: string,
    lastName: string,
    email: string,
    profile_picture: string,
    occupation: string,
    followers: string[],
    following: string[],
    posts:string[]
    feeds_id:string
}
type comment={
    comment_id:ObjectId,
    commentor_id:string,
    commentorName:string,
    commentorProfile:string,
    comment:string
}
type Post={
    comments: object[],
    likes:string[],
    post_description: string
    post_title: string
    post_url: string
    user_id: string
    _id: string
}

type uploadpostdetails={
    post_picture:File|string,
    posttitleinput:string
}

type Feed={
    feeds:string[]
}