import React from 'react';
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
  } from '@chakra-ui/react'
import {useRecoilState} from "recoil"
import { authModalState } from '@/src/atoms/authModalAtom';
import AuthInputs from './AuthInputs';


const AuthModal:React.FC = () => {
     const [modalState,setModalState] =useRecoilState(authModalState)

     const handleClose = () =>{
        setModalState((prev) =>({
            ...prev,
            open: false,
        }))
     }
    return (
     <>
           
            <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">
                    {modalState.view ==="login" && "Login"}
                    {modalState.view ==="signup" && "Sign Up"}
                    {modalState.view ==="resetPassword" && "Reset Password"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mb="6"
                >
                    <Flex direction="column"
                    align="center"
                    justify="center"
                    width="70%"
                    >
                        <AuthInputs/>
                    </Flex>
                </ModalBody>
            </ModalContent>
            </Modal>
     </>
    );
}
export default AuthModal;