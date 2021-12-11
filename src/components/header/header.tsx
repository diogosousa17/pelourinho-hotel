import { Box, Image, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { LoginButton } from '../loginButton/loginButton'
import { RegisterButton } from '../registerButton/registerButton'

export function Header() {
    return (
        <>
            <Flex w="100%">
                <Image
                    boxSize='124px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <Flex w="100%" justify="space-between" align="center" px="5">
                    <Box>
                        <Flex>
                            <Link href="/" passHref>
                                <Text as="a" cursor="pointer">
                                    Home
                                </Text>
                            </Link>
                            <Spacer />
                            <Link href="/homepage" passHref>
                                <Text as="a" cursor="pointer" pl="5">
                                    Bedrooms
                                </Text>
                            </Link>
                            <Spacer />
                            <Link href="/" passHref>
                                <Text as="a" cursor="pointer" pl="5">
                                    About Us
                                </Text>
                            </Link>
                            <Spacer />
                            <Link href="/homepage" passHref>
                                <Text as="a" cursor="pointer" pl="5">
                                    Contact Us
                                </Text>
                            </Link>
                        </Flex>
                    </Box>
                    <Spacer />
                    <LoginButton />
                    {/* <Link href="/" passHref>
                        <Box as="button" w="124px" h="54px" border="2px" borderColor="#C29A76">
                            Register
                        </Box>
                    </Link> */}
                    <RegisterButton />
                </Flex>
                <Box w="360px" bg="#C29A76" h="124" as="button" fontSize='lg'>
                    <Text>BOOK NOW</Text>
                </Box>
            </Flex>
        </>
    )
}