
import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';

type RightContentProps = {
    user?: User | null;
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return (
        <>
        <AuthModal/>
        <Flex justify="center" align="center">
         {user? <Icons/>: <AuthButtons/>}
        </Flex>
        </>
        
    )
}
export default RightContent;