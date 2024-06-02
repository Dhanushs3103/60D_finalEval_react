//Packages 
import { Routes,Route } from 'react-router-dom' //importing Routes and Route from react router dom
import React from 'react'

// local imports
import Home  from "../Pages/Home" // importing Home page
import ProductDetails from "../Pages/ProductDetails" // importing ProductDetails page
import Login from "../Pages/Login" // importing Login page
import PrivateRoute from "./PrivateRoute"


export default function AllRoutes() {
  return (
    <>
      <Routes>
        {/* creating Route form Home Page */}
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/> 
        {/* creating Route form Login Page */}
        <Route path='/login' element={<Login/>}/>
        {/* creating Route form ProductDetails Page */}
        <Route path='/:productId' element={<PrivateRoute><ProductDetails/></PrivateRoute>}/>
      </Routes>
    </>
  )
}
