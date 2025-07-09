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
import { usePost } from "../hooks/usePost";
import FormPost from "../components/FormPost";


const schema = yup.object().shape({
  title: yup.string().required("El campo titulo es requerido").min(5,"Minimo 5 caracteres"),
  body: yup.string().required("El campo contenido es requerido"),
});

interface createProps {
  createPost: (value:IPost) => void
}

const Create = ({ createPost } : createProps ) => {

  const [open, setOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  
  const onSubmit = (data:any) => {
    createPost({ ...data, id:0, userId: 1});
    setOpen(true);
  };

  console.log('errors',errors)

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

