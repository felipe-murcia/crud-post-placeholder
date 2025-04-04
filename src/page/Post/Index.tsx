import { CardPost } from "@/components/CardPost/CardPost";
import { usePost } from "@/hooks/usePost";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import List from "./List";
import Create from "./Create";

const Index = () => {

  //const navigate = useNavigate();
  const { data, createPost, deletePost } = usePost();
  
  return (
    <div>
      <Stack align="center">
        <Heading size="2xl">Proyecto CRUD Post {data?.length}</Heading>
        <Text mb="3" fontSize="md" color="fg.muted">
          Un proyecto crud sencillo para prueba tecnica
        </Text>
      </Stack>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List  data={data} deletePost={deletePost}/>} />
            <Route path="/create" element={<Create createPost={createPost} />} />
        </Routes>
        </BrowserRouter>



    </div>
  );
};

export default Index;
