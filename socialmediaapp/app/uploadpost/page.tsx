'use client'
import { LoginRegisterContext } from "../contexts/ContextCreate"
import { useContext, useEffect } from "react"
import Info from "../Components/loginOrRegister/Info"
import { redirect } from "next/navigation"
const UploadPost=()=>{

 
  const context=useContext(LoginRegisterContext)

    if(context.userDetails._id===""){
      context.handleNav('.profile','.main','.more')
      context.handleInfo("Login to upload post")
    redirect('/')
    }

  return(
    <div className="mainpage">
        <div className='pagetitle'>
          <h1>Upload Post</h1>
        </div>
        <div className="loginorregister">
        <Info />
        <div className="container">
        <div className="displayupload">
            <svg id="ePbozRZVmBC1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1280 720" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="eVniEOWRkg94-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eVniEOWRkg94-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="4,4"/><feOffset id="eVniEOWRkg94-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eVniEOWRkg94-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eVniEOWRkg94-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eVniEOWRkg94-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eVniEOWRkg94-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eVniEOWRkg94-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eVniEOWRkg95-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eVniEOWRkg95-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eVniEOWRkg95-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eVniEOWRkg95-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eVniEOWRkg95-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eVniEOWRkg95-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eVniEOWRkg95-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eVniEOWRkg95-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eVniEOWRkg96-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eVniEOWRkg96-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eVniEOWRkg96-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eVniEOWRkg96-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eVniEOWRkg96-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eVniEOWRkg96-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eVniEOWRkg96-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eVniEOWRkg96-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eVniEOWRkg97-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eVniEOWRkg97-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5"/><feOffset id="eVniEOWRkg97-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eVniEOWRkg97-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eVniEOWRkg97-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eVniEOWRkg97-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eVniEOWRkg97-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eVniEOWRkg97-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="eVniEOWRkg98-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="eVniEOWRkg98-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="15,15"/><feOffset id="eVniEOWRkg98-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="eVniEOWRkg98-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="eVniEOWRkg98-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="eVniEOWRkg98-filter-drop-shadow-0-merge" result="result"><feMergeNode id="eVniEOWRkg98-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="eVniEOWRkg98-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M43.968104,172.4178v400.085156l39.616081,39.225941l221.539046.000004l37.755468,37.383651l73.107584.000001h291.409991L946.547408,276.957932q248.759953,0,248.759953,0t36.254035-36.254035v-68.286097l-38.90049-38.900489h-171.770599l-39.0757-39.0757h-225.865657l-47.891062,47.891062-49.613086-49.613087h-242.458513-73.107591l-40.855627,40.855627h-218.438887L43.968104,172.4178Z" transform="translate(2.23525 0)" opacity="0.6" fill="#00f" stroke="#bdffc0" stroke-width="2.56"/><path d="M43.968104,172.4178v400.085156l39.616081,39.225941l221.539046.000004l37.755468,37.383651l73.107584.000001h291.409991L946.547408,276.957932q248.759953,0,248.759953,0t36.254035-36.254035v-68.286097l-38.90049-38.900489h-171.770599l-39.0757-39.0757h-225.865657l-47.891062,47.891062-49.613086-49.613087h-242.458513-73.107591l-40.855627,40.855627h-218.438887L43.968104,172.4178Z" transform="translate(2.23525 0)" opacity="0.5" stroke-width="2.56"/><path d="M306.795554,140.357661h-211.116481L45.799904,190.17678v362.636835l42.650724,42.599376h215.932536" transform="matrix(1 0 0 0.942668 0.000003 21.107326)" filter="url(#eVniEOWRkg94-filter)" fill="none" stroke="#ddffdf" stroke-width="5"/><path d="M45.799905,168.930375l39.225941-39.225941h219.357318l37.383651-37.38365h72.387617" transform="translate(1.831852-3.807027)" filter="url(#eVniEOWRkg95-filter)" fill="none" stroke="#ddffdf" stroke-width="8" stroke-miterlimit="5"/><path d="M45.799905,168.930375l39.225941-39.225941h219.357318l37.383651-37.38365h72.387617" transform="matrix(1.007757 0 0-1.007754-1.380746 742.149185)" filter="url(#eVniEOWRkg96-filter)" fill="none" stroke="#ddffdf" stroke-width="8" stroke-miterlimit="5"/><path d="M45.799905,168.930375l39.225941-39.225941h219.357318l37.383651-37.38365h72.387617" transform="matrix(-1.01 0 0-1.01 1143.695577 742.356539)" filter="url(#eVniEOWRkg97-filter)" fill="none" stroke="#ddffdf" stroke-width="8" stroke-miterlimit="5"/><path d="M414.154434,92.320786h242.059716q48.036876,50.663662,49.350269,49.350269t48.552676-48.552676h227.188884l37.752473,37.752473h169.124145q41.546944,45.034366,41.546944,41.546944t0,68.286097l-36.254035,36.254035h-248.759953L705.564419,649.112549h-291.409992" transform="translate(1.831856 0.000004)" filter="url(#eVniEOWRkg98-filter)" fill="none" stroke="#bdffc0" stroke-width="20"/><path d="" fill="none" stroke="#3f5787" stroke-width="2.56"/></svg>
            <form className="input">
                <div className="input1">
                <label htmlFor='post_picture' >Post</label>
                <input type='file' id='post_picture' onChange={context.postUploadChange}  accept="image/*"/>
                </div>
                <div className="input2">
                <label htmlFor='posttitleinput' >Title</label>
                <input type='text' id='posttitleinput' onChange={context.postUploadChange}/>
                </div>
            </form>
            <h1 onClick={()=>context.handlePostUpload()}>Upload</h1>
        </div>
        </div>
        </div>
      </div>
  )
}

export default UploadPost