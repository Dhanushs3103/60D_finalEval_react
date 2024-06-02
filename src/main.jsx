//Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // importing the BrowserRouter component
import { ChakraProvider } from "@chakra-ui/react"; // importing the ChakraProvider component

//Local Imports
import App from "./App.jsx";
import AuthContextProvider from "./Components/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
