import { auth } from '@/src/firebase/clientApp';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import RightContent from './RightContent/RightContent';
import Searchinput from './SearchInput';
import Directory from './Directory/Directory';


const Navbar:React.FC= () => {
const[user,loaing,error]=useAuthState(auth);
    return (
        <Flex bg="white" 
        height='44px' 
        padding="6px 12px"
        justify={{md:"space-between"}}>
         <Flex align="center" width={{base:"40px", md:"auto"}} mr={{base: 0, md:2}}>
            <Image
             src='/images/logo_dark.png1'
             display={{ base: "none", md:"unset"}}/>
         </Flex>
         {user && <Directory/>}
         <Searchinput user={user}/>
         <RightContent user={user}/>
        </Flex>
        
    )
}
export default Navbar;