'use client'

import { useContext } from "react"
import { LoginRegisterContext } from "./contexts/ContextCreate"
import Info2 from "./Components/info2"

const Home=()=>{
  const conext=useContext(LoginRegisterContext)
  conext.displayLoading(false)
    return(
        <div className="mainpage">
          <div className='pagetitle'>
            <h1>Home</h1>
            <Info2/>
          </div>
        </div>
      )
}
export default Home