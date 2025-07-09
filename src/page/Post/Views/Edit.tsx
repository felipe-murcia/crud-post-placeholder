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

interface EditProps {
  updatePost: (id:number, value:IPost) => void,
  post: IPost
}

const Edit = ({ updatePost, post } : EditProps ) => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = (data:any) => {
    updatePost( post.id, { ...data });
    setOpen(true);
  };

  return (
    <Fieldset.Root size="lg" maxW="md">

      <DialogSample open={open} onClick={()=>navigate("/")} title={"Saved successfully."}/>

      <Button alignSelf="flex-start" color={"colorPalette.950"}>
        <NavLink to="/"> Atrás </NavLink>
      </Button>
      <Stack>
        <Fieldset.Legend>Editar de Post</Fieldset.Legend>
        <Fieldset.HelperText> 
          Por favor, proporciona tus datos de contacto a continuación.
        </Fieldset.HelperText>
      </Stack>

      <FormPost onSubmit={onSubmit} value={post}/>
    </Fieldset.Root>
  );
};

export default Edit;

