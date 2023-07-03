
import Link from "next/link"
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import { deletePost, getPost, likeDislikePost } from "@/fetchers/post"
import { getUser } from "@/fetchers/user"
import {  Dispatch, useContext, useEffect, useState,SetStateAction } from "react"
export const DisplaySinglePost=({post_id,setContent}:{post_id:string,setContent:Dispatch<SetStateAction<boolean>>})=>{
    const context=useContext(LoginRegisterContext)
    const [userDetails,setUserData]=useState<userDetails>()
    const [postData,setPostData]=useState<Post>()
    const[likeOrNot,setLike]=useState<boolean>()
    useEffect(()=>{  
      async function getdata() {
        if(context.token!==null){
          context.displayLoading(true)
        const post:Post=await getPost(post_id)
        const user:userDetails=await getUser(post.user_id,context.token)
        context.displayLoading(false)
        setUserData(user)
        setPostData(post)
        setLike(post.likes.includes(context.userDetails._id))
        }
      }
      getdata() 
    },[])
    
    async function removePost() {

      if(postData && context.token){
        context.displayLoading(true)
        const res=await deletePost(postData.user_id,post_id,context.token)
        context.displayLoading(false)
      if(res){
        context.refreshUser()
        setContent(prev=>!prev)
      }

      }
    }
    
    async function handleLike() {
      if(postData && userDetails && context.token){
        context.displayLoading(true)
        const res=await likeDislikePost(postData._id,context.userDetails._id,context.token)
        context.displayLoading(false)
      if(res)setLike(prev=>!prev)
      context.refreshUser()
      context.refreshStranger()
      }
    }
    return(
        
          <div className="displaysinglepost">
            <svg id="eEt6ZBbDTvf1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 180" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="eEt6ZBbDTvf4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="4,4"/><feOffset id="eEt6ZBbDTvf4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="4,4"/><feOffset id="eEt6ZBbDTvf5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf6-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf6-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf6-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf6-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf6-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf6-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf6-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf6-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf7-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf7-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf7-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf7-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf7-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf7-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf7-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf7-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf8-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf8-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf8-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf8-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf8-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf8-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf8-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf8-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf9-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf9-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf9-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf9-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf9-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf9-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf9-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf9-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf10-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf10-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf10-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf10-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf10-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf10-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf10-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf10-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf11-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf11-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="0,2"/><feOffset id="eEt6ZBbDTvf11-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf11-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf11-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf11-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf11-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf11-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf12-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf12-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="0,5"/><feOffset id="eEt6ZBbDTvf12-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf12-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf12-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf12-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf12-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf12-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf13-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf13-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="0,5"/><feOffset id="eEt6ZBbDTvf13-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf13-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf13-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf13-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf13-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf13-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eEt6ZBbDTvf14-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eEt6ZBbDTvf14-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eEt6ZBbDTvf14-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eEt6ZBbDTvf14-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eEt6ZBbDTvf14-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eEt6ZBbDTvf14-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eEt6ZBbDTvf14-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eEt6ZBbDTvf14-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M11.227705,94.853761h-11.227705L0,0h299.999999v94.853759l-11.044113-.000012.000003-15.645139-10.912605-13.128876-.000001-27.915769-20.136589-19.712621-67.639038-.000001-15.523877,15.377022-67.77262-.345177-9.690685-9.588896-60.190468-.000001L11.227693,49.999987l.000012,44.853774Z" transform="translate(.000007 0.000014)" stroke-width="0.6"/><path d="M11.227705,94.853761h-11.227705L0,0h299.999999v94.853759l-11.044113-.000012.000003-15.645139-10.912605-13.128876-.000001-27.915769-20.136589-19.712621-67.639038-.000001-15.523877,15.377022-67.77262-.345177-9.690685-9.588896-60.190468-.000001L11.227693,49.999987l.000012,44.853774Z" transform="matrix(-1 0 0-1 300.000004 184.853767)" stroke-width="0.6"/><path d="M11.227695,94.853761v-44.853761L37.090008,24.137687h60.190468l9.690685,9.690685h67.919473l15.377024-15.377023h68.063006l19.71262,19.71262v30.132039l10.912604,10.912604v15.645149" transform="translate(.000005 0)" filter="url(#eEt6ZBbDTvf4-filter)" fill="none" stroke="#83fa88" stroke-width="2"/><path d="M11.227695,94.853761v-44.853761L37.090008,24.137687h60.190468l9.690685,9.690685h67.919473l15.377024-15.377023h68.063006l19.71262,19.71262v30.132039l10.912604,10.912604v15.645149" transform="matrix(-1 0 0-1 300.183587 184.853761)" filter="url(#eEt6ZBbDTvf5-filter)" fill="none" stroke="#83fa88" stroke-width="2"/><path d="M224.808905,13.349474h-34.541242l-15.523879,15.52388h-14.063462L183.999806,4.02168h30.703987l10.105112,9.327794Z" transform="translate(.000003 0)" filter="url(#eEt6ZBbDTvf6-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M234.025531,13.349474h24.305138l24.443338,24.443338-.224876,19.204919l8.455363,7.894245v-31.063604L262.348161,5.172039h-37.539253l9.216623,8.177435Z" transform="translate(0-.345176)" filter="url(#eEt6ZBbDTvf7-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M234.025531,13.349474h24.305138l24.443338,24.443338-.224876,19.204919l10.53473,7.894245.000001-31.063604L264.598368,5.17204l-39.78946-.000001l9.216623,8.177435Z" transform="matrix(-1 0 0-1 300.155039 183.891972)" filter="url(#eEt6ZBbDTvf8-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M282.774007,70.638974l8.400063,8.400063-.169577-3.898563-8.230486-8.285786v3.784286Z" transform="translate(-.169576-4.559237)" filter="url(#eEt6ZBbDTvf9-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M11.2277,42.616563L37.243379,16.600884h8.094798L57.056547,5.172038h-26.903125L11.227704,24.13769L11.2277,42.616563Z" transform="translate(.000001 0.000001)" filter="url(#eEt6ZBbDTvf10-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M49.575783,5.172039L33.609265,16.600885h7.833577L57.344728,5.172039h-7.768945Z" transform="matrix(.710963 0 0 1 24.566876-.153368)" filter="url(#eEt6ZBbDTvf11-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M49.575783,5.172039L33.609265,16.600885h7.833577L57.344728,5.172039h-7.768945Z" transform="matrix(.710963 0 0 1 33.161604-.153368)" filter="url(#eEt6ZBbDTvf12-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M49.575783,5.172039L33.609265,16.600885h7.833577L57.344728,5.172039h-7.768945Z" transform="matrix(.710963 0 0 1 42.16888-.153368)" filter="url(#eEt6ZBbDTvf13-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/><path d="M49.575783,5.172039L33.609265,16.600885l40.277473.153368L90.574263,5.325407l-40.99848-.153368Z" transform="matrix(.710963 0 0 1 51.451187-.153368)" filter="url(#eEt6ZBbDTvf14-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="0.6"/></svg>
              <div className="deletepost" onClick={removePost} style={postData?.user_id===context.userDetails._id ? {}:{display:'none'}} >
                <h1><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg></h1>
              </div>
            <div className="postowner">
            <svg id="postownersvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 300" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="eCFSnusK9MR4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eCFSnusK9MR4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="eCFSnusK9MR4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eCFSnusK9MR4-filter-drop-shadow-0-flood" flood-color="#bdffc0"/><feComposite id="eCFSnusK9MR4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eCFSnusK9MR4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eCFSnusK9MR4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eCFSnusK9MR4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M149.999999,53.240311h701.699064L969.311795,237.50026h-819.311796" transform="translate(.000001 0)" fill="#00f" stroke-width="2"/><path stroke="black"  d="M149.999999,53.240311h701.699064L969.311795,237.50026h-819.311796" transform="translate(.000001 0)" opacity="0.5" stroke-width="2"/></svg>

              <div className="postownerprofile">
              <svg id="ownerpicsvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 320" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="30" ry="30" transform="matrix(5 0 0 5 159.999884 160.000002)" paint-order="stroke fill markers" fill="#bdffc0" stroke="#000" stroke-width="4"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" fill="#00f" stroke="#00f"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" opacity="0.5" stroke-width="12"/><ellipse rx="29.449529" ry="29.2061" transform="matrix(3.820095 0 0 3.851935 160 159.999999)" stroke="#bdffc0" stroke-width="2"/><path d="M150,150v-150v150l150.000245.03" transform="translate(9.999877 9.999998)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150Q256.051189,43.886982,256.051189,43.948811" transform="translate(9.999878 9.999999)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150L290.34265,96.974407" transform="translate(9.999877 10)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,149.768681l53.025596-140.34" transform="translate(9.999877 10.261318)" fill="none" stroke="#000" stroke-width="12"/></svg>
              <div className="ownerimg">
              <img id="ownerimg" src={`${process.env.NEXT_PUBLIC_API}/uploads/${userDetails?.profile_picture}`} />
              </div>
              </div>
              <div className="postownerdetails">
                <h2>{userDetails?.firstName}</h2>

                <h3>{postData?.post_title}</h3>
              </div>
            </div>
            <div className="postdetails">
              <div className="singlepostimgcontainer">
              <img className="singlepostimg" src={`${process.env.NEXT_PUBLIC_API}/uploads/${postData?.post_url}`} />
              </div>
              <div className="likesandcomments">
                <Link href={`comments/${post_id}`} className="comments" onClick={()=>context.displayLoading(true)}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18Z"/></svg>
                  <h2>Comments</h2>
                </Link>
                <input type="checkbox" id="likedislikebtn"checked={likeOrNot}/>
                <label className="like" htmlFor="likedislikebtn">
                <svg onClick={handleLike} id="likeheart" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path   d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
                  <h2>Like</h2>
                </label>
                
              </div>
            </div>
            
          </div>
        
    )
}