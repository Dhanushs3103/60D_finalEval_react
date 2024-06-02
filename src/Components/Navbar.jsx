//Packages
import React from 'react'
import { Link } from 'react-router-dom' // importing the Link from ReactRouterDom
import { Flex, Spacer,Button } from '@chakra-ui/react' // importing required components from chakra UI
// Local imports
import {AuthContext} from "../Components/AuthContextProvider"
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  let {email,isLogin} = useContext(AuthContext)
  let navigate = useNavigate()
  return (
    <>
      <Flex boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"} p={4} fontSize={"20px"} fontWeight={"500"}>
        <p>{email}</p>
        <Spacer/>
        <Link to={"/"}>Home</Link>
        <Spacer/>
        {
          isLogin ? (<Button  variant="solid" colorScheme='red' onClick={()=>{
           navigate(`/login`)
          }}>Logout</Button>) :(<Button  variant="solid" colorScheme='green' onClick={()=>{
            navigate(`/login`)
           }}>Login</Button>)
        }
        <Spacer/>
      </Flex>
    </>
  )
}
