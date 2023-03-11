import React from 'react';
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import {useRecoilState} from "recoil"
import { authModalState } from '@/src/atoms/authModalAtom';


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
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                
                </ModalBody>
            </ModalContent>
            </Modal>
     </>
    );
}
export default AuthModal;