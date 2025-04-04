
import { CloseButton, Dialog, Portal, Button } from "@chakra-ui/react"

interface createProps {
  onClick: () => void;
  title: string;
  open: boolean
}

export const DialogSample = ({ onClick, open = false, title ="" }: createProps) => {
  return (
    <Dialog.Root lazyMount open={open} >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer>
              <Button onClick={onClick}>Acept</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}