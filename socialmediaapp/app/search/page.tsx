'use client'
import { useContext, useEffect, useState } from "react"
import { LoginRegisterContext } from "../contexts/ContextCreate"
import { redirect } from "next/navigation"
import { SearchUser } from "@/fetchers/user"
const Search=()=>{
  const context=useContext(LoginRegisterContext)

    if(context.userDetails._id===""){
      context.handleNav('.profile','.main','.more')
      context.handleInfo("Login to search people")
    redirect('/')
    }
    const [searchText,setSearchText]=useState("dinkacgika")
    const [searchresult,setSearchResult]=useState()
    useEffect(()=>{
      async function search(){
        context.displayLoading(true)
        const resultData=await SearchUser(searchText)
        context.displayLoading(false)
        const resultList=resultData.map((userdata:userDetails)=>{
          
          return(
            <div key={userdata._id} className="searcheuser" onClick={()=>context.handleStranger(2,userdata._id)}>
              <svg id="eDwVXMKnjkr1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2400 900" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="eDwVXMKnjkr4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eDwVXMKnjkr4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="eDwVXMKnjkr4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eDwVXMKnjkr4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eDwVXMKnjkr4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eDwVXMKnjkr4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eDwVXMKnjkr4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eDwVXMKnjkr4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eDwVXMKnjkr5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eDwVXMKnjkr5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="20,20"/><feOffset id="eDwVXMKnjkr5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eDwVXMKnjkr5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eDwVXMKnjkr5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eDwVXMKnjkr5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eDwVXMKnjkr5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eDwVXMKnjkr5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M580.801617,84.793651h1287.98636v609.110259h-539.563292-730.023262-200.974142L104.186325,399.862954L421.172316,82.876962l159.629301,1.916689Z" transform="translate(-76.052101 59.336951)" fill="#00f" stroke-width="4"/><path d="M580.801617,84.793651h1287.98636v609.110259l-162.937513.000079-376.625779-.000079h-730.023262-200.974142L104.186325,399.862954L421.172316,82.876962l159.629301,1.916689Z" transform="translate(-76.052101 61.253637)" opacity="0.5" stroke-width="4"/><path d="M347.573098,642.044893h627.29966l51.859015,51.859015l692.242957.000021l48.127032-51.859036h101.686214" transform="translate(-76.052116-430.338926)" filter="url(#eDwVXMKnjkr4-filter)" fill="none" stroke="#ddffdf" stroke-width="10"/><path d="M601.829966,84.793651h-199.769313L93.316221,393.538083L398.227277,698.449139h200.974142" transform="translate(-76.052097 59.336948)" filter="url(#eDwVXMKnjkr5-filter)" fill="none" stroke="#bdffc0" stroke-width="35"/></svg>
            <div className="followerpic">
            <svg id="followerpicsvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 320" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="30" ry="30" transform="matrix(5 0 0 5 159.999884 160.000002)" paint-order="stroke fill markers" fill="#bdffc0" stroke="#000" stroke-width="4"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" fill="#00f" stroke="#00f"/><path d="M150,0C64.774173,0,0.000001,67.432888,0,150c.000001,83.758562,63.706351,150,150,150c83.674752,0,150.194519-64.045883,150.000001-150h-149.999999L150,0Z" transform="translate(9.999878 9.999999)" opacity="0.5" stroke-width="12"/><ellipse rx="29.449529" ry="29.2061" transform="matrix(3.820095 0 0 3.851935 160 159.999999)" stroke="#bdffc0" stroke-width="2"/><path d="M150,150v-150v150l150.000245.03" transform="translate(9.999877 9.999998)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150Q256.051189,43.886982,256.051189,43.948811" transform="translate(9.999878 9.999999)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,150L290.34265,96.974407" transform="translate(9.999877 10)" fill="none" stroke="#000" stroke-width="12"/><path d="M150,149.768681l53.025596-140.34" transform="translate(9.999877 10.261318)" fill="none" stroke="#000" stroke-width="12"/></svg>
              <div className="followerimg">
              <img id="followerimg" src={`http://localhost:3001/uploads/${userdata.profile_picture}`} />
              </div>
            </div>
            <div className="followerdetails">
              <h2>{userdata.firstName+" "+userdata.lastName}</h2>
              <h3>{userdata.occupation}</h3>
            </div>
          </div>
          )
        })
      
        setSearchResult(resultList)
      }
      if(searchText!=""){
      search()}
    },[searchText])
    return(
      <div className="mainpage">
        <div className='pagetitle'>
          <h1>Search</h1>
        </div>
        <div className="maincontent">
            <div className="searchbar" > 
            <svg id="eNoaAO1eZ6W1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1200 200" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M17.506494,-19.839379v119.839379l60.485585,60.485585h522.007921" transform="translate(0 0.000002)" fill="none" stroke="#bdffc0" stroke-width="18"/><path d="M17.506494,-19.839379v119.839379l60.485585,60.485585h522.007921" transform="matrix(-1 0 0 1 1200 0.000002)" fill="none" stroke="#bdffc0" stroke-width="18"/></svg>
            <input type="text" id="searchbar" placeholder="Type...." onChange={e=>setSearchText(prev=>e.target.value)} />
          </div>
          <div className="searchresult">
            {searchresult}
          </div>
        </div>
      </div>
    )
  }
  
  export default Search