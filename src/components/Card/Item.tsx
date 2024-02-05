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
} from "@chakra-ui/react";
import React from "react";
interface ItemProps {
  colorItem: string;
}

const Item: React.FC<ItemProps> = ({ colorItem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <div
      className={`flex mt-7 ${colorItem} rounded-lg p-3 gap-5 cursor-pointer`}
    >
      <div className="flex align-center gap-5 text-neutral-800 font-semibold">
        <DragHandleIcon cursor={"grab"} marginTop={"5px"} />
        {/* Editable */}
        <p>Hello</p>
        {/* <p className="text-xs font-normal mt-[6px]">17.32.2024</p> */}
        <div className="flex align-center gap-6 ml-16 mt-[-5px]">
          <EditIcon onClick={() => {}} marginTop={"10px"} cursor={"pointer"} />
          <DeleteIcon onClick={onOpen} marginTop={"10px"} cursor={"pointer"} />
        </div>
        {/* Alert */}
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
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} colorScheme="red" ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    </div>
  );
};
export default Item;
//   Editable,
//  EditableInput,
//  EditablePreview,
