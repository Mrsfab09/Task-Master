import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const ModalContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleAddTask = () => {
    //Logika dodawania zadania
    onClose();
    toast({
      title: "Task added.",
      description: "You've added a new task.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Button
        leftIcon={<AddIcon color="rgb(2 132 199)" marginTop={"4"} />}
        marginTop={"1"}
        variant={"unstyled"}
        color={"rgb(2 132 199)"}
        onClick={onOpen}
      >
        New
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8}>
              <Input variant="flushed" placeholder="Name task" />
              <p className="text-gray-400">
                Select the date of task completion:
              </p>
              <Input
                mt={-5}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <Textarea placeholder="Description" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={4} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme={"blue"} onClick={handleAddTask}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalContainer;
