import { CardPost } from "@/components/CardPost/CardPost";
import { usePost } from "@/hooks/usePost";
import { IPost } from "@/interface/Post";
import { Button, Flex } from "@chakra-ui/react";

const List = () => {
  const { data } = usePost();
  return (
    <div>
 
        <Button>
          Crear
        </Button>

      <Flex gap="4" wrap="wrap" mt="4">
        {data.map((post: IPost) => (
            <CardPost key={post.id} item={post} />
        ))}
      </Flex>

    </div>
  );
};

export default List;
