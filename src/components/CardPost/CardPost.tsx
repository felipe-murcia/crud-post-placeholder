import { IPost } from "@/interface/Post"
import { Button, Card } from "@chakra-ui/react"
import { DeleteConfirm } from "../DeleteConfirm/DeleteConfirm"

interface CardPostProps {
    item: IPost
    deletePost: (value:number) => void
    editPost: (value:IPost) => void
}

export const CardPost = ({ item, deletePost, editPost }:CardPostProps) => {
  
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Card.Body gap="2">
        <Card.Title>{item.title}</Card.Title>
        <Card.Description>
          {item.body}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button size="sm" onClick={()=>editPost(item)}>Editar</Button>
        <DeleteConfirm onClick={()=>deletePost(item.id)} />
      </Card.Footer>
    </Card.Root>
  )
}
