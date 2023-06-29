'use client'
import { useContext } from "react"
import { LoginRegisterContext } from "../contexts/ContextCreate"
import Link from "next/link"
const More=()=>{
    const context=useContext(LoginRegisterContext)
    return(
        <div className='more'>
            <div className='morecontainer'>
            <Link href='/search' onClick={()=>{
              context.handleNav('.main','.profile','.more')              
            }}>
            <div className='search'>
              <svg id="eFKgdJx3uMq1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1800 500" preserveAspectRatio='none' shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="ewvKfTuGIdA3-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA3-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA3-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA3-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA3-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA3-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.6" fill="#00f" stroke="#bdffc0" stroke-width="15"/><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.5" filter="url(#ewvKfTuGIdA3-filter)" stroke="#0ae900" stroke-width="15"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" filter="url(#ewvKfTuGIdA4-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" transform="matrix(-1 0 0-1 1794.28 504.952)" filter="url(#ewvKfTuGIdA5-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/></svg>
              <div>
              <h2>Search People</h2>
              </div>
            </div>
            </Link>
            <Link href='/myFeed' onClick={()=>{
              context.handleNav('.main','.profile','.more')              
            }}>
            <div className='showfeed'>
              <svg id="eFKgdJx3uMq1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1800 500" preserveAspectRatio='none' shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="ewvKfTuGIdA3-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA3-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA3-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA3-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA3-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA3-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.6" fill="#00f" stroke="#bdffc0" stroke-width="15"/><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.5" filter="url(#ewvKfTuGIdA3-filter)" stroke="#0ae900" stroke-width="15"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" filter="url(#ewvKfTuGIdA4-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" transform="matrix(-1 0 0-1 1794.28 504.952)" filter="url(#ewvKfTuGIdA5-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/></svg>
              
              <div>
              <h2>Show Feed</h2>
              </div>
            </div>
            </Link>
            
            <Link href='/chats' onClick={()=>{
              context.refreshUser()
              context.handleNav('.main','.profile','.more')              
            }}>
            <div className='showfollowing'>
              <svg id="eFKgdJx3uMq1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1800 500" preserveAspectRatio='none' shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="ewvKfTuGIdA3-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA3-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA3-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA3-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA3-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA3-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.6" fill="#00f" stroke="#bdffc0" stroke-width="15"/><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.5" filter="url(#ewvKfTuGIdA3-filter)" stroke="#0ae900" stroke-width="15"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" filter="url(#ewvKfTuGIdA4-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" transform="matrix(-1 0 0-1 1794.28 504.952)" filter="url(#ewvKfTuGIdA5-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/></svg>

              <div>
              <h2>Chats</h2>
              </div>
            </div>
            </Link>
            <Link href='/uploadpost' onClick={()=>{
              context.handleNav('.main','.profile','.more')              
            }}>
            <div className='uploadpost'>
              <svg id="eFKgdJx3uMq1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1800 500" preserveAspectRatio='none' shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><filter id="ewvKfTuGIdA3-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA3-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA3-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA3-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA3-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA3-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA3-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA4-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA4-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA4-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA4-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA4-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA4-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA4-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter><filter id="ewvKfTuGIdA5-filter" x="-150%" width="400%" y="-150%" height="400%"><feGaussianBlur id="ewvKfTuGIdA5-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="10,10"/><feOffset id="ewvKfTuGIdA5-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/><feFlood id="ewvKfTuGIdA5-filter-drop-shadow-0-flood" flood-color="#0ae900"/><feComposite id="ewvKfTuGIdA5-filter-drop-shadow-0-composite" operator="in" in2="tmp"/><feMerge id="ewvKfTuGIdA5-filter-drop-shadow-0-merge" result="result"><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-1"/><feMergeNode id="ewvKfTuGIdA5-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/></feMerge></filter></defs><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.6" fill="#00f" stroke="#bdffc0" stroke-width="15"/><path d="M1071.148562,490.121912l40.123023-40.123023h175.311288l40.065412,40.065413h233.287395l237.331185-237.331185L1557.45979,12.926042h-858.842427L657.588422,53.954983h-158.135048L457.909966,12.411575h-220.321541L0,250L242.540193,492.540193l828.608369-2.418281Z" transform="translate(.000001 0.000001)" opacity="0.5" filter="url(#ewvKfTuGIdA3-filter)" stroke="#0ae900" stroke-width="15"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" filter="url(#ewvKfTuGIdA4-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/><path d="M219.709112,84.656699L53.125638,251.240173L215.796804,413.911339h56.909248L111.020777,252.226064l164.62732-164.62732-55.938985-2.942045Z" transform="matrix(-1 0 0-1 1794.28 504.952)" filter="url(#ewvKfTuGIdA5-filter)" fill="#bdffc0" stroke="#0ae900" stroke-width="3.6"/></svg>
              <div>
              <h2>Upload Post</h2>
              </div>
            </div>
            </Link>
            </div>
          </div>
    )
}

export default More