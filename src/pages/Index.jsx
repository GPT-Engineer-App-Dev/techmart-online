import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Index = () => {
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

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {products.map((product) => (
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