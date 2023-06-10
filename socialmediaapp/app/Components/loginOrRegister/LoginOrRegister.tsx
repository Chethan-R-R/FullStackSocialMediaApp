'use client'
import { useEffect, useState, useContext } from "react"
import ButtonsLoginOrRegister from "./ButtonsLoginOrRegister"
import Info from "./Info"
import { LoginRegisterContext } from "@/app/contexts/ContextCreate"
import Register from "./Register"
import Login from "./Login"

const LoginOrRegister = () => {
    const context=useContext(LoginRegisterContext)
    let displayRegisterLogin
    if(context.displayRegister===undefined)displayRegisterLogin=<ButtonsLoginOrRegister />
    else if(context.displayRegister===true)displayRegisterLogin=<Register />
    else displayRegisterLogin=<Login />
    return(
        <div className="loginorregister">
            <Info />
            {displayRegisterLogin}
        </div>
    )
}
export default LoginOrRegister