import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure,
    Stack,
    Tag,
    TagLabel,
    TagIcon,
    Avatar,
    TagCloseButton,
    HStack,
    Box,
    Text,
} from "@chakra-ui/react"

import { FaSun, FaMoon, FaSearch, FaGithub } from 'react-icons/fa';
import { Container, Header, List } from "semantic-ui-react";
import Search from "./Search";



function SearchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} leftIcon={<FaSearch color="gray.100" />} colorScheme="gray" variant="outline" size="lg" width="100%" textAlign="left" textColor="gray.400" justifyContent="flex-start">
                Click here to add Ingredients
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text> </Text>
                        <text> </text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Search />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default SearchModal;