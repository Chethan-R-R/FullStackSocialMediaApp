'use client'
import { useContext } from "react"
import { LoginRegisterContext } from "../contexts/ContextCreate"

export const Loading=()=>{
    const context=useContext(LoginRegisterContext)
    return(
        <div className="loadingpage" style={context.Loading?{display:"flex"}:{display:"none"}}>
            <span className="loader"></span>
        </div>
    )
}