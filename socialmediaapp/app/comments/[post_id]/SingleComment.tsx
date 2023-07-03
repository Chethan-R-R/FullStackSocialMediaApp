
export const Singlecomment=({comment,userId,deleteComment}:{comment:comment,userId:string,deleteComment:Function})=>{
   
  return(
        <div  className="singlecomment">
              <svg id="eKtO75Lc4Bs1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1800 700" preserveAspectRatio="none" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M49.008119,350v-220.709454l101.40216-101.40216h626.613344l37.700803,37.700803h85.275573h85.275573l37.700803-37.700803h626.613344l101.40216,101.40216v220.709454v220.709454l-101.40216,101.40216h-626.613344l-37.700803-37.700803h-85.275573-85.275573l-37.700803,37.700803h-626.613344L49.008119,570.709454v-220.709454Z" transform="matrix(-1 0 0-1 1799.999999 700)" fill="#00007f" stroke="#0f0" stroke-width="10"/><path d="M777.023624,672.111614l37.700803-37.700803h170.551145l37.700803,37.700803h-245.952751Z" transform="translate(.000002 0.000001)" fill="#bdffc0" stroke="#08ff08" stroke-width="10"/><path d="M777.023624,672.111614l37.700803-37.700803h170.551145l37.700803,37.700803h-245.952751Z" transform="matrix(1 0 0-1 0.000022 700)" fill="#bdffc0" stroke="#08ff08" stroke-width="10"/></svg>
              <div className="deletecomment" onClick={()=>deleteComment(comment.comment_id)} style={userId===comment.commentor_id ? {}:{display:'none'}} >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>
              </div>
              <div className="commentor">
              <svg id="egbnuwkhlPS1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M81.867469,17.79201L95.208457,50.000006L81.867467,82.207998L49.65948,95.548982L17.451485,82.207995L4.110501,50.000004L17.451489,17.792007L49.659482,4.451024L81.867469,17.79201Z" transform="matrix(1.276858 0 0-1.276858-13.748627 113.842903)" fill="none" stroke="#00007f" stroke-width="25"/><path d="M81.867469,17.79201L95.208457,50.000006L81.867467,82.207998L49.65948,95.548982L17.451485,82.207995L4.110501,50.000004L17.451489,17.792007L49.659482,4.451024L81.867469,17.79201Z" transform="matrix(1 0 0-1-.000003 100.000003)" fill="none" stroke="#0f0" stroke-width="4"/></svg>
              <img id="commentorprofile" src={`${process.env.NEXT_PUBLIC_API}/uploads/${comment.commentorProfile}`} />
              </div>
              <div className="commentdetails">
                <div className="commentorname">
                <h2>{comment.commentorName}</h2>
                </div> 
                <div className="comment">
                  <h3>{comment.comment}</h3>
                </div>
              </div>
            </div>
    )
}