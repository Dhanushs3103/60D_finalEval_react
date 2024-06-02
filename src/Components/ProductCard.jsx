//packages
import React from "react";
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
import { useNavigate } from "react-router-dom"; // importing useNavigate hook for navigation
//local imports

export default function ProductCard({ product }) {
  let { image, title, category, brand, price,id } = product; // destructuring
  let navigate = useNavigate()
  return (
    <div>
      <Card maxW="sm">
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
          <Button variant="solid" colorScheme="blue" onClick={() => {navigate(`/${id}`)}}>
            More Details{" "}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
