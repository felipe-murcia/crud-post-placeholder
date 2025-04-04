import { usePost } from "@/hooks/usePost";
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


const schema = yup.object().shape({
  title: yup.string().required("The ttile is required"),
  body: yup.string().required("The body is required"),
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


  return (
    <Fieldset.Root size="lg" maxW="md">

      <DialogSample open={open} onClick={()=>navigate("/")} title={"Saved successfully."}/>

      <Button alignSelf="flex-start" color={"colorPalette.950"}>
        <NavLink to="/"> Back </NavLink>
      </Button>
      <Stack>
        <Fieldset.Legend>Formulario de Post</Fieldset.Legend>
        <Fieldset.HelperText> 
          Por favor, proporciona tus datos de contacto a continuación.
        </Fieldset.HelperText>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Title</Field.Label>
            <Input {...register("title")} placeholder="title" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Body</Field.Label>
            <Textarea {...register("body")} placeholder="Comment..."/>
          </Field.Root>
  
        </Fieldset.Content>
        <br></br>
        <Button type="submit" width={"1/2"}>
          Publish
        </Button>

      </form>
    </Fieldset.Root>
  );
};

export default Create;

