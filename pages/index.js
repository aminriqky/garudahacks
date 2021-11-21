import Image from 'next/image';
import router from 'next/router';
import React,{ useEffect } from 'react';
import {
  chakra, Flex, Button, AspectRatio, useBreakpointValue
} from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  //useEffect(() => {
  //  if(isAuthenticated){
  //      router.push('/admin/home')
  //  }
  //});

  return (
    <React.Fragment>
      <Flex flexDir={useBreakpointValue({ base: "column", lg: "row" })}>
        <Flex flexDir="column" justifyContent="center" w={{ lg:"600px" }} px={{ base: 8, lg: 20 }} py="36px">
          <chakra.h1 fontSize={{ base: "4xl", lg: "4xl", xl: "5xl" }} mb={24}
            fontWeight="bold"
            color="black"
            lineHeight="shorter"
          >
            Get started for free.
          </chakra.h1>
          <Button onClick={()=> router.push('/admin/home')} w="100%" textColor="white" colorScheme="yellow" mb="4">
            Sign Up
          </Button>
          <Button onClick={()=> router.push('/admin/home')} w="100%" textColor="white" colorScheme="yellow" mb="4">
            Sign In
          </Button>
        </Flex>
        <AspectRatio flexDir="column" bg="gray.200" justifyContent="center" w="100%">
          <Image alt="laptop" src="https://source.unsplash.com/random/?laptop" layout="fill" priority/>
        </AspectRatio>
      </Flex>
    </React.Fragment>
  )
}