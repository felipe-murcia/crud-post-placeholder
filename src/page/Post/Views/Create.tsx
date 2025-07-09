import { IPost } from "@/interface/Post";
import {
  Button,
  Fieldset,
  Stack,
} from "@chakra-ui/react"
import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";
import { DialogSample } from "@/components/Dialog/Dialog";
import FormPost from "../components/FormPost";

interface createProps {
  createPost: (value:IPost) => void
}

const Create = ({ createPost } : createProps ) => {

  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  
  const onSubmit = (data:any) => {
    createPost({ ...data, id:0, userId: 1});
    setOpen(true);
  };

  return (
    <Fieldset.Root size="lg" maxW="md">

      <DialogSample open={open} onClick={()=>navigate("/")} title={"Saved successfully."}/>

      <Button alignSelf="flex-start" color={"colorPalette.950"}>
        <NavLink to="/"> Atrás </NavLink>
      </Button>
      <Stack>
        <Fieldset.Legend>Formulario de Post</Fieldset.Legend>
        <Fieldset.HelperText> 
          Por favor, proporciona tus datos de contacto a continuación.
        </Fieldset.HelperText>
      </Stack>

      <FormPost onSubmit={onSubmit} />
      
    </Fieldset.Root>
  );
};

export default Create;

