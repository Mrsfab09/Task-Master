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
import { useState } from "react";

const ModalContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const toast = useToast();
  const handleAddTask = () => {
    onClose();
    toast({
      title: taskValue,
      description: descValue + " data: " + dateValue,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <>
      <Button
        leftIcon={
          <AddIcon
            color="rgb(2 132 199)"
            marginTop={"4"}
            className="dark:text-sky-300"
          />
        }
        marginTop={"1"}
        variant={"unstyled"}
        color={"rgb(2 132 199)"}
        onClick={onOpen}
        className="dark:text-sky-300"
      >
        New
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Stack spacing={8}>
                <Input
                  value={taskValue}
                  onChange={(event) => setTaskValue(event.target.value)}
                  variant="flushed"
                  placeholder="Name task"
                />
                <p className="text-gray-400">
                  Select the date of task completion:
                </p>
                <Input
                  value={dateValue}
                  onChange={(event) => setDateValue(event.target.value)}
                  mt={-5}
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
                <Textarea
                  value={descValue}
                  onChange={(event) => setDescValue(event.target.value)}
                  placeholder="Description"
                />
              </Stack>
            </form>
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
