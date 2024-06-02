
//Packages
import React from 'react'
import { useToast } from '@chakra-ui/react'


export default function ErrorIndicator() {
    let toast = useToast();
  return (
    <div>
      {
         toast({
            title: `Something went wrong, please refresh the page or try again`,
            status: "error",
            isClosable: true,
            duration:3000
          })
      }
    </div>
  )
}
