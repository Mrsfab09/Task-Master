import { Modal, ModalBody, useDisclosure } from "@chakra-ui/react";

const Popover = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalBody>fjeifjef</ModalBody>
      </Modal>
    </>
  );
};
export default Popover;
