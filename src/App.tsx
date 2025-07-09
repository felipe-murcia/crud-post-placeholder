import './App.css';
import { Container } from "@chakra-ui/react"
import Post from './page/Post/Views/Index';

const App = () => {
  return (
    <Container maxW="container.xl" p="14">
      <Post />
    </Container>
  );
};

export default App;
