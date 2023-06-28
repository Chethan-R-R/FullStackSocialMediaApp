import { postList } from "@/fetchers/post"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"

export const PostsList=({user}:{user:userDetails|strangerDetails})=>{
    const context=useContext(LoginRegisterContext)
    const [listOfPost,setPostList]=useState()
    useEffect(()=>{
        async function allPost() {
            context.displayLoading(true)
            const data=await postList(user._id)
            context.displayLoading(false)
            if(data){
                const list=data.map((post:Post)=>{
                    return(
                        <Link href={`post/${user._id}/${post._id}`} key={post._id} className="singlepost" onClick={()=>{
                            context.displayLoading(true)
                            context.handleNav('.main','.profile','.more')
                        }}>
                            <svg id="eRTHj0QAy1C1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 400" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="e29zXGhyB0F11-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="e29zXGhyB0F11-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="e29zXGhyB0F11-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="e29zXGhyB0F11-filter-drop-shadow-0-flood" flood-color="#06ff15"/><feComposite id="e29zXGhyB0F11-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="e29zXGhyB0F11-filter-drop-shadow-0-merge" result="result"><feMergeNode id="e29zXGhyB0F11-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="e29zXGhyB0F11-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M0,333.364175v41.731403l20.074145,17.824823l120.242869-1.301288-56.57963-58.25494L0,333.364175Z" transform="translate(.000002 7.079597)" opacity="0.6" fill="#00f" stroke="#06ff15" stroke-width="0.8"/><path d="M0.790948,22.87324L0.790945,-6.636495h19.283201L0.790948,22.87324Z" transform="matrix(-1.743387 0 0-.926515 305.567706 398.046026)" stroke="#3f5787" stroke-width="0.8"/><path d="M-2.620147,20.246576l-.452079-26.883071h23.146372L-2.620147,20.246576Z" transform="matrix(0 1-1 0 297.552283 0.17243)" stroke="#3f5787" stroke-width="0.8"/><path d="M-6.814985,20.246574v-22.694293l27.34121.000002C7.541477,8.40853,-6.129128,23.26339,-6.814985,20.246574Z" transform="matrix(0-1 1 0-.172426 397.379853)" stroke="#3f5787" stroke-width="0.8"/><path d="M-2.620147,20.246576v-22.694293h23.146372L-2.620147,20.246576Z" transform="translate(.000002 0)" stroke="#3f5787" stroke-width="0.8"/><path d="M103.767983,0l12.807096,12.807096h33.424921h33.424921L196.232017,0.000001L103.767983,0Z" stroke-width="0.8"/><path d="M0,21.39497L21.218085,0.176885h82.549897l12.807096,12.807096h33.424921" transform="translate(.000001-.176885)" fill="none" stroke="#06ff15" stroke-width="6"/><path d="M196.232016,400.176884h-92.464033l-82.549897-.000002L0.000001,378.958797L0,21.39497L21.218085,0.176885h82.549897l12.807096,12.807096h33.424921" transform="matrix(-1 0 0 1 299.999999-.176885)" fill="none" stroke="#06ff15" stroke-width="6"/><path d="M0,20.246576l.000001.971509L0,378.781914l21.218085,21.218085l82.549897-.000002" fill="none" stroke="#06ff15" stroke-width="6"/><path d="M0.000001,333.364173h83.737385l44.248175,50.080463h63.675731" transform="translate(0 7.079595)" filter="url(#e29zXGhyB0F11-filter)" fill="none" stroke="#06ff15" stroke-width="6"/></svg>
                            <img src={`http://localhost:3001/uploads/${post.post_url}`} />
                            <h2>{post.likes.length}<svg id="heartpostlist" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#FF473E" d="M476.6 133c-53.7-63.5-148.7-66.5-206.3-9.1l-.2.2c-8 8-20.5 8-28.4 0l-.2-.2c-54.6-54.8-143.3-55-198.1-.4C-3.2 169.8-10.9 244.6 25 299.7c11.2 17.3 25.3 30.6 40.9 40.7l180 145.7c6.4 5.2 15.6 5.2 22.1 0l178.8-145.9c15-10 28.6-23 39.5-39.5c34.1-51.3 30.1-120.7-9.7-167.7z"/><path fill="#FF6E83" d="M58.7 242.6c-.6 0-1.3 0-1.9-.1c-12.9-1.1-22.5-12.4-21.5-25.3c3.8-45.9 36.5-83.5 81.5-93.5c12.6-2.8 25.2 5.1 28 17.8c2.8 12.6-5.1 25.2-17.8 28c-24.8 5.5-42.9 26.3-45 51.6c-1 12.2-11.2 21.5-23.3 21.5z"/></svg></h2>
                        </Link>
                    )
                })
                setPostList(list)
            }
        }
        allPost()
    },[user._id,user.posts])
    return (
        <div className="postlist">
            {listOfPost}
        </div>
    )
}