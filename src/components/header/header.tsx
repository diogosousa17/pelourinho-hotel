import { Box, Image, Flex, Spacer, Text, useBreakpointValue, Container, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Center, DrawerHeader, DrawerBody, Stack, DrawerFooter } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { LoginButton } from '../loginButton/loginButton'
import { RegisterButton } from '../registerButton/registerButton'
import { FiMenu } from 'react-icons/fi'

export function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const wide = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <>
            {
                !wide ? (
                    <>
                        <Flex w="100%" align="center">
                            <Image
                                boxSize='70px'
                                objectFit='cover'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                            <Spacer />
                            <Button
                                bgColor='#C29A76'
                                borderRadius="0"
                                _focus={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                                onClick={onOpen}
                                boxSize="70px"
                            >
                                <FiMenu color='#fff' size={30} />
                            </Button>
                        </Flex>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                        >
                            <DrawerOverlay />
                            <DrawerContent bgColor="#FFF">
                                <DrawerCloseButton />
                                <DrawerHeader>Pelourinho Hotel & Spa</DrawerHeader>
                                <DrawerBody>
                                    <Stack>
                                        <Link href="/" passHref>
                                            <Text as="a" cursor="pointer">
                                                Home
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/bedrooms" passHref>
                                            <Text as="a" cursor="pointer">
                                                Bedrooms
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/" passHref>
                                            <Text as="a" cursor="pointer">
                                                About Us
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/" passHref>
                                            <Text as="a" cursor="pointer">
                                                Contact Us
                                            </Text>
                                        </Link>
                                    </Stack>
                                    <Center>
                                        <LoginButton />
                                        <RegisterButton />
                                    </Center>
                                </DrawerBody>
                                <DrawerFooter>
                                    <Box w="360px" bg="#C29A76" h="124" as="button" fontSize='lg' color="#000">
                                        <Text>BOOK NOW</Text>
                                    </Box>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </>
                ) : (
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
                                        <Link href="/bedrooms" passHref>
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
                                        <Link href="/" passHref>
                                            <Text as="a" cursor="pointer" pl="5">
                                                Contact Us
                                            </Text>
                                        </Link>
                                    </Flex>
                                </Box>
                                <Spacer />
                                <LoginButton />
                                <RegisterButton />
                            </Flex>
                            <Box w="360px" bg="#C29A76" h="124" as="button" fontSize='lg'>
                                <Text>BOOK NOW</Text>
                            </Box>
                        </Flex>
                    </>
                )
            }
        </>
    )
}