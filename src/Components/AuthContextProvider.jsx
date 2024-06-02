import React from 'react'
import { createContext,useState } from 'react'

export let AuthContext = createContext()

export default function AuthContextProvider({children}) {
    let [email,setEmail] = useState("");
    let [isLogin,setIsLogin] = useState(false);
    function login (email) {
        setIsLogin(true)
        setEmail(email)
    }
    function logout () {
        setIsLogin(false)
    }

    let authvalues ={
        isLogin,
        login,
        logout,
        email
    }
  return (
    <AuthContext.Provider value={authvalues}>
        {children}
    </AuthContext.Provider>
  )
}
