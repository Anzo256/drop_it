import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Icon,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { signOut, User } from 'firebase/auth';
import {FaRedditSquare} from "react-icons/fa";
import {VscAccount} from "react-icons/vsc";
import {CgProfile} from "react-icons/cg";
import {MdOutlineLogin} from "react-icons/md";

import {IoSparkles} from "react-icons/io5";
import { auth } from '@/src/firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';

type UserMenuProps = {
    user?: User | null;
};

const UserMenu:React.FC<UserMenuProps> = ({user}) => {
     const setAuthModalState = useSetRecoilState(authModalState);
    return (
 <Menu>
  <MenuButton 
  cursor="pointer"
  padding="0px 6px"
  borderRadius={4}
  _hover={{
    outline:"1px solid",
    outlineColor:"gray.200"
  }}>
     <Flex align="center">
          <Flex align="center">
        {user? (
        
            <>
            <Icon fontSize={24} mr={1} color="gray.300" as={FaRedditSquare}/>
            </>
        ) : (
            <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount}/>
        )}
      </Flex>
      <ChevronDownIcon/>
      </Flex>
     </MenuButton>
      <MenuList>
      {user?(
          <>
              <MenuItem fontSize="10pt"
        fontWeight={700}
         _hover={{bg:"blue.500",
            color:"white"
            }}
    >
    <Flex align="center">
        <Icon fontSize="20" mr={2} as={CgProfile}/>Profile
    </Flex>
    </MenuItem>
    <MenuDivider/>
    <MenuItem fontSize="10pt"
    fontWeight={700}
    _hover={{bg:"blue.500",
            color:"white"
            }}
      onClick={()=>signOut(auth)}      
    >
    <Flex align="center">
        <Icon fontSize="20" mr={2} as={MdOutlineLogin}/>LogOut
    </Flex>
    </MenuItem>
          </>
    ) : (
        
          <>
           <MenuItem fontSize="10pt"
            fontWeight={700}
            _hover={{bg:"blue.500",
                    color:"white"
                    }}
            onClick={()=>setAuthModalState({open:true, view:"login"})}      
            >
            <Flex align="center">
                <Icon fontSize="20" mr={2} as={MdOutlineLogin}/>Log In /Sign Up
            </Flex>
        </MenuItem>
          </>
    )}

  
  </MenuList>
</Menu>
    )
}
export default UserMenu;