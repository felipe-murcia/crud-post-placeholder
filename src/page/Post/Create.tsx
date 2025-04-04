import { usePost } from "@/hooks/usePost";
import { IPost } from "@/interface/Post";
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { useState } from "react";

const Create = () => {

  const { data, createPost } = usePost();

  const [ formData, setFormData ] = useState<IPost>({
    id: null,
    userId: 1,
    title: "Pruerba",
    body: "Descripcon",
  });

  const handleSubmit = async () => {
    let res = await createPost(formData)
    console.log('res[uesta',res);
  }


  return (
    <Fieldset.Root size="lg" maxW="md">

      <Stack>
        <Fieldset.Legend>Formulario de Post</Fieldset.Legend>
        <Fieldset.HelperText>
        Por favor, proporciona tus datos de contacto a continuación.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Titulo</Field.Label>
          <Input name="title" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Textarea name="body" placeholder="Comment..." />
        </Field.Root>
 
      </Fieldset.Content>

      <Button type="submit" onClick={() => handleSubmit()} >
        Publicar
      </Button>
      <Button variant="ghost" alignSelf="flex-start" color={"colorPalette.950"}>Cancelar</Button>
    </Fieldset.Root>
  );
};

export default Create;

