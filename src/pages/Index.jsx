import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Link, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", category: "Smartphones", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", category: "Laptops", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", category: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery) &&
      (selectedCategory === "" || product.category === selectedCategory)
    );
  });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Flex>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text>Find the best electronic products here!</Text>

        <Box as="section" w="full" mb={8}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            size="lg"
            variant="filled"
            mb={4}
          />
          <Select placeholder="Filter by category" onChange={handleCategoryChange} size="lg" variant="filled">
            <option value="Smartphones">Smartphones</option>
            <option value="Laptops">Laptops</option>
            <option value="Headphones">Headphones</option>
          </Select>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading size="md">{product.name}</Heading>
                <Text mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;