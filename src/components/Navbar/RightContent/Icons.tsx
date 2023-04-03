import React from 'react';
import { Flex,Icon } from '@chakra-ui/react';
import {BsArrowUpRightCircle, BsChatDots} from "react-icons/bs";
import {GrAdd} from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsCircleOutline,
  IoVideocamOffOutline,
} from "react-icons/io5";

const Icons:React.FC = () => {
    
    return (
       <Flex>
         <Flex display={{base:"none", md:"flex"}}
         align="center"
         borderRight="1px solid"
         borderColor="gray.200"
         >
             <Flex 
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={BsArrowUpRightCircle} fontSize={20}/>
             </Flex>
             <Flex 
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={ IoFilterCircleOutline} fontSize={22}/>
             </Flex>
             <Flex 
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={IoVideocamOffOutline} fontSize={22}/>
             </Flex>
         </Flex>
         <>
         <Flex 
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={BsChatDots} fontSize={20}/>
        </Flex>
        <Flex 
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={IoNotificationsCircleOutline} fontSize={20}/>
        </Flex>
        <Flex 
            display={{base:"none", md:"flex"}}
             mr={1.5} 
             ml={1.5}
             padding={1}
             cursor="pointer"
             borderRadius={4}
             _hover={{bg:"gray.200"}}
             >
             <Icon as={GrAdd} fontSize={20}/>
        </Flex>
         </>
       </Flex>
    )
};
export default Icons;