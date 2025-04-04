import { IPost } from "@/interface/Post"
import { Button, Card, Image, Text } from "@chakra-ui/react"

interface CardPostProps {
    item: IPost
}

export const CardPost = ({ item }:CardPostProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">

      <Card.Body gap="2">
        <Card.Title>{item.title}</Card.Title>
        <Card.Description>
          {item.body}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Editar</Button>
        <Button variant="ghost">Eliminar</Button>
      </Card.Footer>
    </Card.Root>
  )
}
