import { CardPost } from "@/components/CardPost/CardPost";
import { IPost } from "@/interface/Post";
import { Button, Flex, Box, Center, Stack, Input, InputGroup  } from "@chakra-ui/react";
import { NavLink, redirect, useNavigate } from "react-router";
import { PaginationRoot, PaginationPrevTrigger,  PaginationItems, PaginationNextTrigger} from '@/components/ui/pagination';
import { useReducer, useState } from "react";
import { LuSearch } from "react-icons/lu"
import { initialState, postReducer } from "@/reducer/postReducer";

interface ListProps {
  deletePost: (value:number) => void;
  data: IPost[];
  editPost: (valie:IPost) => void;
}

const List = ({ deletePost = () => {}, data = [], editPost = () => {} }:ListProps) => {

  const [ currentPage, setCurrentPage] = useState(1);
  const [ search, setSearch ] = useState("");
  const pageSize = 6;

  const [ state, dispatch ] = useReducer(postReducer, initialState);
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredData = data.filter(item =>
      Object.values(item).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
      )
  ); 

  const setValueEdit = async (data:IPost) => {
    editPost(data)
    navigate("/edit");
  }

  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
  return (
    <div>

      <Stack alignItems={"flex-end"}  >     
        <Button>
          <NavLink to="/create">
            Crear
          </NavLink>
        </Button>
      </Stack>

      <Stack alignItems={"flex-start"}  >   
        <InputGroup flex="1" startElement={<LuSearch />} width={'200'}>
            <Input placeholder="Search ..." value={search} onChange={(e:any) => setSearch(e.target.value)}/>
        </InputGroup>
      </Stack>

      <Flex gap="4" wrap="wrap" mt="4" justifyContent={'center'}>
        {paginatedData.map((post: IPost) => (
            <CardPost key={post.id} item={post} deletePost={deletePost} editPost={setValueEdit} />
        ))}
      </Flex>

      <br />

      <Box  marginBottom={10}  >
        <Center>
          <PaginationRoot count={data.length} pageSize={pageSize} defaultPage={1} 
          onPageChange={(value:{ page: number })=>handlePageChange(value.page)}>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </PaginationRoot>
        </Center>
      </Box>

    </div>
  );
};

export default List;
