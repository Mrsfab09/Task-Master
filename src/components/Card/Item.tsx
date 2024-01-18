import { DragHandleIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
interface ItemProps {
  colorItem: string;
}

const Item: React.FC<ItemProps> = ({ colorItem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  return (
    <div
      className={`flex flex-row align-center mt-7 ${colorItem} rounded-lg p-3 gap-5`}
    >
      <DragHandleIcon cursor={"grab"} marginTop={"3px"} />
      <div className="flex flex-row align-center gap-28">
        <p>Hello</p>
        <div className="flex align-center gap-4">
          <EditIcon onClick={() => {}} marginTop={"3px"} cursor={"pointer"} />
          <DeleteIcon onClick={onOpen} marginTop={"3px"} cursor={"pointer"} />
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Task
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure you want to delete the task ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      toast({
                        title: "Task added",
                        description: "The task was added successfully ",
                        status: "error",
                        duration: 5000,
                        position: "top",
                        isClosable: true,
                      })
                    }
                    colorScheme="red"
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
export default Item;
