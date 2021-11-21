import { useRouter } from 'next/router';
import React,{ useEffect } from 'react';
import {
  Flex, Icon,useDisclosure, IconButton, Text, Box, Drawer,
  DrawerOverlay, DrawerContent
} from '@chakra-ui/react';
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { MdSettings } from "@react-icons/all-files/md/MdSettings";
import { MdExitToApp } from "@react-icons/all-files/md/MdExitToApp";
import { HiCollection } from "@react-icons/all-files/hi/HiCollection";
import { useAuth0 } from "@auth0/auth0-react";

export default function Admin(props) {
  const router = useRouter();
  const sidebar = useDisclosure();
  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if(!isAuthenticated){
        router.push('/')
    }
  });

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex align="center" px="4" mx="2" rounded="md" py="3" cursor="pointer" color="whiteAlpha.700"
        _hover={{ bg: "yellow.300", color: "gray.600" }} role="group" fontWeight="semibold" 
        transition=".15s ease" {...rest}>
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.600",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="gray.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Nektar
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem onClick={() => router.push('/admin/home')} icon={MdHome}>Content Review</NavItem>
        <NavItem onClick={() => router.push('/admin/plan')} icon={HiCollection}>Content Planning</NavItem>
        <NavItem icon={MdSettings}>Settings</NavItem>
        <NavItem onClick={() => logout({ returnTo: 'http://localhost:3000/' })} icon={MdExitToApp}>Sign Out</NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      minH="100vh"
      bg="gray.100"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="yellow.300"
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            colorScheme="yellow"
            size="sm"
          />
          <Box w="96" display={{ base: "none", md: "flex" }}>
            <Text fontWeight="semibold">My Dashboard</Text>
          </Box>
        </Flex>
        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
