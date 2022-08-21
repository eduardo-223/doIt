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

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalError = ({ isOpen, onClose }: ModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalHeader>ModalTitle</ModalHeader>
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
