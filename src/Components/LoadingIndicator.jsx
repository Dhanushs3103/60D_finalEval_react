//Packages
import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function LoadingIndicator() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      marginTop:"50px"
    }}>
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </div>
  );
}
