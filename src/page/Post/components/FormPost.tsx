import { IPost } from "@/interface/Post";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("El campo titulo es requerido").min(5,"Minimo 5 caracteres"),
  body: yup.string().required("El campo contenido es requerido"),
});

interface FormProps {
  onSubmit: (data:any) => void,
  value?: IPost
}

const FormPost = ({ onSubmit, value =  { title:'', body: '', userId: 1, id: 0 } } : FormProps ) => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: value
  });

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Fieldset.Content>
            <Field.Root invalid={ errors.title && true}>
              <Field.Label>Titulo</Field.Label>
              <Input {...register("title")} placeholder="title" />
              { errors.title && <Field.ErrorText>{errors.title.message}</Field.ErrorText> }
            </Field.Root>

            <Field.Root invalid={ errors.body && true}>
              <Field.Label>Contenido</Field.Label>
              <Textarea {...register("body")} placeholder="Comment..."  />
              { errors.body && <Field.ErrorText>{errors.body.message}</Field.ErrorText> }
            </Field.Root>
    
          </Fieldset.Content>
          <Button type="submit" width={"1/2"}>
            Publicar
          </Button>
        </Stack>

      </form>
  );
};

export default FormPost;

