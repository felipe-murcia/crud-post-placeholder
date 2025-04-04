import { usePost } from "@/hooks/usePost"
import { IPost } from "@/interface/Post"
import { Card } from "@chakra-ui/react"
import { DeleteConfirm } from "../DeleteConfirm/DeleteConfirm"

interface CardPostProps {
    item: IPost
    deletePost: (value:number) => void
}



export const CardPost = ({ item, deletePost }:CardPostProps) => {
  
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Card.Body gap="2">
        <Card.Title>{item.title}</Card.Title>
        <Card.Description>
          {item.body}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <DeleteConfirm onClick={()=>deletePost(item.id)} />
      </Card.Footer>
    </Card.Root>
  )
}
