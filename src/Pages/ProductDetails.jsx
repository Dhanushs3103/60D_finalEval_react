//Packages
import React from "react";
import { useState, useEffect } from "react"; //importing useState, useEffect form react
import axios from "axios"; // importing axios
import { Container, Flex, Select } from "@chakra-ui/react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"; // importing the required components from chakra UI
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom"; // importing useNavigate hook for navigation

//local imports

import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

//API_URL
let API_URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let toast = useToast();

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Add to Cart
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Are you sure you want to add this item to cart
            </AlertDialogHeader>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  toast({
                    title: `Item added to cart`,
                    status: "success",
                    isClosable: true,
                    duration: 1500,
                  });
                  onClose()
                }}
                ml={3}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default function ProductDetails() {
  let [loading, setLoading] = useState(false); //maintaining the state for loading.
  let [error, setError] = useState(false); //maintaining the state for error.
  let [product, setProduct] = useState({}); // maintaining state for storing product data.
  let navigate = useNavigate();
  let { productId } = useParams(); // geting the id from the url.

  // function to fetch the data from the API,
  async function getData(productId) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `${API_URL}/${productId}`,
      });
      setProduct(res.data.data);
      // console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(productId);
  }, [productId]); //invocking the useEffect to handle side effect in the component.

  if(loading) {
    return <LoadingIndicator/>
  }

  if(error) {
    return <ErrorIndicator/>
  }

  let { image, title, category, brand, price } = product; // destructuring
  return (
    <>
    <h1 style={{
      fontSize:"30px",
      fontWeight:"500",
      textAlign:"center",
      marginTop:"20px",
      marginBottom:"20px"
    }}>Product Details</h1>
     <div style={{width:"30%", margin:"auto", marginTop:"50px", marginBottom:"50px"}} >
      <Card maxW="sm" >
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width={"350px"}
            height={"260px"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Title: {title}</Heading>
            <Text fontSize="xl">Category: {category}</Text>
            <Text fontSize="xl">Brand: {brand}</Text>
            <Text color="blue.600" fontSize="2xl">
              Price: ${price}
            </Text>
          </Stack>
        </CardBody>
        <hr />
        <CardFooter>
          <Flex gap={5}>
            <Button
              variant="solid"
              colorScheme="orange"
              onClick={() => {
                navigate(`/`);
              }}
            >
              Back{" "}
            </Button>
            <AlertDialogExample />
          </Flex>
        </CardFooter>
      </Card>
    </div>
    </>
   
  );
}
