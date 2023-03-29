import { auth } from '@/src/firebase/clientApp';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import RightContent from './RightContent/RightContent';
import Searchinput from './SearchInput';


const Navbar:React.FC= () => {
const[user,loaing,error]=useAuthState(auth);
    return (
        <Flex bg="white" height='44px' padding="6px 12px">
         <Flex>
            <Image
             src='/images/logo_dark.png'
             display={{ base: "none", md:"unset"}}/>
         </Flex>
         <Searchinput/>
         <RightContent user={user}/>
        </Flex>
        
    )
}
export default Navbar;