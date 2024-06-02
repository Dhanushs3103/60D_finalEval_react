//Packages
import React from "react";
import { Input, Container, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useContext,useEffect } from 'react'
import {AuthContext} from "../Components/AuthContextProvider"
import { useNavigate } from 'react-router-dom'

//local imports

import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

export default function Login() {

  let [email,setEmail] = useState("");
  let [loading, setLoading] = useState(false); //maintaining the state for loading.
  let [error, setError] = useState(false); //maintaining the state for error.
  let [password, setPassword] = useState("")
  let navigate = useNavigate()
  let {login} = useContext(AuthContext)
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      let auth = await axios({
        method:'post',
        url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data:{
          email,
          password
        }
      })
      if(auth.status===200) {
        login(email)
        navigate(`/`)
      }
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
    email =""
    password= ""
  }

  if(loading) {
    return <LoadingIndicator/>
  }
  if(error) {
    return <ErrorIndicator/>
  }
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "500",
        }}
      >
        Authenticate Yourself{" "}
      </h1>
      <Container
        maxW="xl"
        border={"1px solid lightGray"}
        p={4}
        borderRadius={10}
      >
        <form onSubmit={handleSubmit}>
          <Input placeholder="Enter your email" type="email" size="lg" mb={5} value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} />
          <Input placeholder="Enter your password" type="password"  size="lg" mb={5} value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} />
          <Button colorScheme="green" size="lg" p={"15px 243px"} type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
