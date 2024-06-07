import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Image, Button, Input, IconButton, Badge } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, image: "https://images.unsplash.com/photo-1529158062015-cad636e205a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGUlMjBHcmVhdCUyMEdhdHNieSUyMGJvb2slMjBjb3ZlcnxlbnwwfHx8fDE3MTc3NTEzOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, title: "1984", author: "George Orwell", price: 8.99, image: "https://images.unsplash.com/photo-1529158062015-cad636e205a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwxOTg0JTIwYm9vayUyMGNvdmVyfGVufDB8fHx8MTcxNzc1MTM5Mnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99, image: "https://images.unsplash.com/photo-1529158062015-cad636e205a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUbyUyMEtpbGwlMjBhJTIwTW9ja2luZ2JpcmQlMjBib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE3NzUxMzkyfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, title: "Moby-Dick", author: "Herman Melville", price: 15.99, image: "https://images.unsplash.com/photo-1529158062015-cad636e205a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNb2J5LURpY2slMjBib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE3NzUxMzkzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxW="container.xl" py={10}>
      <HStack justifyContent="space-between" mb={10}>
        <Text fontSize="3xl" fontWeight="bold">
          Book Store
        </Text>
        <HStack>
          <Input placeholder="Search for books..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
          <Badge colorScheme="green">{cart.length}</Badge>
        </HStack>
      </HStack>
      <VStack spacing={8}>
        {filteredBooks.map((book) => (
          <HStack key={book.id} spacing={6} p={4} borderWidth="1px" borderRadius="lg" w="full">
            <Image boxSize="100px" objectFit="cover" src={book.image} alt={book.title} />
            <VStack align="start">
              <Text fontSize="xl" fontWeight="bold">
                {book.title}
              </Text>
              <Text>by {book.author}</Text>
              <Text>${book.price.toFixed(2)}</Text>
              <Button colorScheme="teal" onClick={() => addToCart(book)}>
                Add to Cart
              </Button>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
