import { IPost } from "@/interface/Post";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DialogSample } from "@/components/Dialog/Dialog";
import FormPost from "../components/FormPost";


const schema = yup.object().shape({
  title: yup.string().required("El campo titulo es requerido").min(5,"Minimo 5 caracteres"),
  body: yup.string().required("El campo contenido es requerido"),
});

interface EditProps {
  updatePost: (id:number, value:IPost) => void,
  post: IPost
}

const Edit = ({ updatePost, post } : EditProps ) => {

  const [open, setOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post
  });

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

