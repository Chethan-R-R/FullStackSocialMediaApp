'use client'
import { useContext, useEffect, useState } from "react"
import { LoginRegisterContext } from "../contexts/ContextCreate"
import { redirect } from "next/navigation"
import { getUser } from "@/fetchers/user"
const Followers=()=>{
  const context=useContext(LoginRegisterContext)

    if(context.userDetails._id===""){
      context.handleNav('.profile','.main','.more')
      context.handleInfo("Login to see your followers")
    redirect('/')
    }
    context.displayLoading(false)
    const [followersList,setFollowersList]=useState()
    useEffect(()=>{
      const List=context.userDetails.followers.map(async(follower)=>{
        context.displayLoading(true)
        const followerData:userDetails=await getUser(follower,context.token).then(res=>res)
        context.displayLoading(false)
        return(
          <div key={follower} className="singlefollower" >
            <svg id="e3dAiQj2n5Y1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 300" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="eCFSnusK9MR4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eCFSnusK9MR4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="eCFSnusK9MR4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eCFSnusK9MR4-filter-drop-shadow-0-flood" flood-color="#bdffc0"/><feComposite id="eCFSnusK9MR4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eCFSnusK9MR4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eCFSnusK9MR4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eCFSnusK9MR4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M149.999999,53.240311h701.699064L969.311795,237.50026h-819.311796" transform="translate(.000001 0)" fill="#00f" stroke-width="2"/><path d="M149.999999,53.240311h701.699064L969.311795,237.50026h-819.311796" transform="translate(.000001 0)" opacity="0.5" stroke-width="2"/><path id="followbutton" d="M670.052731,210.057289l-58.806366,58.806367h235.225465l56.846154-56.846154-233.265253-1.960213Z" transform="translate(.000001 0)" filter="url(#eCFSnusK9MR4-filter)" fill="#bdffc0" stroke="#bdffc0" stroke-width="2"/></svg>
            <div className="followerpic" onClick={()=>context.handleStranger(2,followerData._id)}>
            <svg id="followerpicsvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 320" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="30" ry="30" transform="matrix(5 0 0 5 159.999884 160.000002)" paint-order="stroke fill markers" fill="#bdffc0" stroke="#000" stroke-width="4"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" fill="#00f" stroke="#00f"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" opacity="0.5" stroke-width="12"/><ellipse rx="29.449529" ry="29.2061" transform="matrix(3.820095 0 0 3.851935 160 159.999999)" stroke="#bdffc0" stroke-width="2"/><path d="M150,150v-150v150l150.000245.03" transform="translate(9.999877 9.999998)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150Q256.051189,43.886982,256.051189,43.948811" transform="translate(9.999878 9.999999)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150L290.34265,96.974407" transform="translate(9.999877 10)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,149.768681l53.025596-140.34" transform="translate(9.999877 10.261318)" fill="none" stroke="#000" stroke-width="12"/></svg>
              <div className="followerimg">
              <img id="followerimg" src={`http://localhost:3001/uploads/${followerData.profile_picture}`} />
              </div>
            </div>
            <div className="followerdetails" onClick={()=>context.handleStranger(2,followerData._id)}>
              <h2>{followerData.firstName+" "+followerData.lastName}</h2>
              <h3>{followerData.occupation}</h3>
            </div>
            <div className="remove" onClick={()=>context.removeFollower(followerData._id)}>
              <h1>Remove</h1>
            </div>
          </div>
        )
      })
      setFollowersList(List)
    },[context.userDetails._id,context.userDetails.followers])

    return(
      <div className="mainpage">
        <div className='pagetitle'>
          <h1>Followers</h1>
        </div>
        <div className="maincontent">
          <div className="" >
          {followersList}   
          </div>
        </div>
      </div>
    )
  }
  
  export default Followers