import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  chakra, Flex, FormControl, Input, Select, Button, Checkbox, AspectRatio, useBreakpointValue, Text, Box
} from '@chakra-ui/react';

export default function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Flex flexDir={useBreakpointValue({ base: "column", lg: "row" })}>
        <Flex flexDir="column" justifyContent="center" w={{ lg:"600px" }} px={{ base: 8, lg: 20 }} py="36px">
          <chakra.h1 fontSize={{ base: "4xl", lg: "4xl", xl: "5xl" }} mb={6}
            fontWeight="bold"
            color="black"
            lineHeight="shorter"
          >
            Get started for free.
          </chakra.h1>
          <FormControl id="email" mb="4">
            <Input placeholder="Email" type="email" isRequired={true} />
          </FormControl>
          <FormControl id="password" mb="4">
            <Input placeholder="Password" type="password" isRequired={true} />
          </FormControl>
          <FormControl id="password" mb="4">
            <Select placeholder="How did you hear about us?">
              <option>Friend</option>
              <option>Family</option>
              <option>Social Media</option>
            </Select>
          </FormControl>
          <Button w="100%" textColor="white" colorScheme="yellow" mb="4" onClick={() => router.push('/account')}>
            Sign Up
          </Button>
          <Checkbox mb="4" size="md" colorScheme="yellow" defaultIsChecked>Sign up for our newsletter</Checkbox>
          <Flex flexDir="row">
            <Text mr="1">Already have an account?</Text>
            <Box _hover={{ textDecor: "underline" }} color="orange.600">
              <Link href="/login">Sign in</Link>
            </Box>
          </Flex>
        </Flex>
        <AspectRatio flexDir="column" bg="gray.200" justifyContent="center" w="100%">
          <Image alt="laptop" src="https://source.unsplash.com/random/?laptop" layout="fill" priority/>
        </AspectRatio>
      </Flex>
    </React.Fragment>
  )
}
