//Packages
import React from "react";
import { useState, useEffect } from "react"; //importing useState, useEffect form react
import axios from "axios"; // importing axios
import { Container, Flex, Select } from "@chakra-ui/react";

//local imports
import ProductCard from "../Components/ProductCard";
import ProductLoadingIndicator from "../Components/ProductLoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

//API_URL
let API_URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

export default function Home() {
  let [loading, setLoading] = useState(false); //maintaining the state for loading.
  let [error, setError] = useState(false); //maintaining the state for error.
  let [products, setProducts] = useState([]); // maintaining state for storing products data.
  let [sortedValue, setSortedValue] = useState(""); // maintaining state for storing sort value .
  let [filterValue, setFilterValue] = useState(""); // maintaining state for storing filter value.

  // function to fetch the data from the API,
  async function getData(sortedValue, filterValue) {
    setLoading(true);
    let params = {};
    if (sortedValue) {
      params.sort = "price";
      params.order = sortedValue;
    }
    if (filterValue) {
      params.filter = filterValue;
    }
    try {
      let res = await axios({
        method: "get",
        url: API_URL,
        params: params,
      });
      setProducts(res.data.data);

      // console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  function handelSort(e) {
    setSortedValue(e.target.value);
  }

  function handleFilter(e) {
    setFilterValue(e.target.value);
  }

  useEffect(() => {
    getData(sortedValue, filterValue);
  }, [sortedValue, filterValue]); //invocking the useEffect to handle side effect in the component.

  if (loading) {
    return <ProductLoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      {/* Heading */}
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          fontWeight: "500",
          marginTop: "20px",
          marginBottom: "20px",
          color: "#383838",
        }}
      >
        Products
      </h1>
      {/* Sorting and filtering section */}
      <Container mb={3} maxW={"6xl"}>
        <Flex mb={4} gap={4}>
          <Select
            placeholder="Sort By Price"
            size="lg"
            value={sortedValue}
            onChange={handelSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
          <Select
            placeholder="Filter By Category"
            size="lg"
            value={filterValue}
            onChange={handleFilter}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor</option>
          </Select>
        </Flex>
      </Container>

      {/* Products Section */}
      <Container
        maxW={"7xl"}
        mt={3}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {products?.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </Container>
    </>
  );
}
