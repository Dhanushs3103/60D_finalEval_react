import React from 'react'
import { useContext,useEffect } from 'react'
import {AuthContext} from "../Components/AuthContextProvider"
import { useNavigate } from 'react-router-dom'


export default function PrivateRoute({children}) {

    let {isLogin} = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect(()=>{
        if(!isLogin) {
            navigate(`/login`)
        }
    },[navigate,isLogin])
  return (
    <div>
      {children}
    </div>
  )
}
