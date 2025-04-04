import { CardPost } from "@/components/CardPost/CardPost";
import { usePost } from "@/hooks/usePost";
import { IPost } from "@/interface/Post";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./List";
import Create from "./Create";

const Index = () => {
  const { data } = usePost();
  return (
    <div>
      <Stack align="center">
        <Heading size="2xl">Proyecto CRUD Post</Heading>
        <Text mb="3" fontSize="md" color="fg.muted">
          Un proyecto crud sencillo para prueba tecnica
        </Text>
      </Stack>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
        </Routes>
        </BrowserRouter>



    </div>
  );
};

export default Index;
