import { usePost } from "@/page/Post/hooks/usePost";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./List";
import Create from "./Create";
import Edit from "./Edit";

const Post = () => {

  const { data, createPost, deletePost, updatePost, postData, editPost } = usePost();

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
          <Route
            path="/"
            element={<List data={data} deletePost={deletePost} editPost={editPost} />}
          />
          <Route path="/create" element={<Create createPost={createPost} />} />
          <Route path="/edit" element={<Edit updatePost={updatePost} post={postData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Post;
