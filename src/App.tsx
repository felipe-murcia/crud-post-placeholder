import './App.css';
import { Button, HStack } from "@chakra-ui/react"
import { RatingGroup } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import Post from './page/Post/Index';

const App = () => {
  return (
    <Container maxW="container.xl" p="14">
      <Post />
    </Container>
  );
};

export default App;
