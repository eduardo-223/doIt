import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalSuccess = ({ isOpen, onClose }: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalHeader>Yesss...</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Ocorreu algum erro!</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Second</Button>
        </ModalFooter>
      </ModalOverlay>
    </Modal>
  );
};
