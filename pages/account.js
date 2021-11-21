import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  chakra, Flex, Input, Button, AspectRatio, useBreakpointValue, 
  InputGroup, InputLeftAddon
} from '@chakra-ui/react';

export default function Login() {
  return (
    <React.Fragment>
      <Flex flexDir={useBreakpointValue({ base: "column", lg: "row" })}>
        <Flex flexDir="column" justifyContent="center" w={{ lg:"600px" }} px={{ base: 8, lg: 20 }} py="36px">
          <chakra.h1 fontSize={{ base: "2xl", lg: "4xl", xl: "5xl" }} mb={6}
            fontWeight="bold"
            color="black"
            lineHeight="shorter"
          >
            Manage your social media.
          </chakra.h1>
          <InputGroup mb="4">
              <InputLeftAddon>@</InputLeftAddon>
              <Input placeholder="Instagram" type="instagram" isRequired={true} />
          </InputGroup>
          <InputGroup mb="4">
              <InputLeftAddon>@</InputLeftAddon>
              <Input placeholder="Tiktok" type="tiktok" isRequired={true} />
          </InputGroup>
          <Button w="100%" textColor="white" colorScheme="yellow" mb="4">
            Confirm
          </Button>
        </Flex>
        <AspectRatio flexDir="column" bg="gray.200" justifyContent="center" w="100%">
          <Image alt="laptop" src="https://source.unsplash.com/random/?laptop" layout="fill" priority/>
        </AspectRatio>
      </Flex>
    </React.Fragment>
  )
}
