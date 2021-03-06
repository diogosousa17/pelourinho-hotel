import {
    Box,
    Image,
    Flex,
    Spacer,
    Text,
    useBreakpointValue,
    useDisclosure,
    Button, Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Center,
    DrawerHeader,
    DrawerBody,
    Stack,
    DrawerFooter,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
    VStack,
    HStack,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Link from 'next/link'
import { LoginButton } from '../loginButton/loginButton'
import { RegisterButton } from '../registerButton/registerButton'
import { FiMenu, FiChevronDown, FiSettings, FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import { AiFillHeart } from "react-icons/ai"

import { useRouter } from 'next/router'

export function Header() {

    const { user, isAuthnticated, signOut } = useContext(AuthContext) // Authentication hook from context

    const { isOpen, onOpen, onClose } = useDisclosure() // Chakra Drawer

    const router = useRouter() // Router from Next to navigate between pages

    const wide = useBreakpointValue({ // We can make responsiveness with this from Chakra
        base: false,
        lg: true
    })

    return (
        <>
            {
                !wide ? ( // If it's wide, show one thing, if not shows another
                    <>
                        <Flex w="100%" align="center" bgColor="#C29A76">
                            <Link href="/" passHref>
                                <Image
                                    boxSize='70px'
                                    objectFit='cover'
                                    src='/logo.png'
                                    alt='Logo'
                                />
                            </Link>
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
                                            <Text as="a" cursor="pointer" onClick={(() => onClose())}>
                                                Home
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/bedrooms" passHref>
                                            <Text as="a" cursor="pointer" onClick={(() => onClose())}>
                                                Bedrooms
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/aboutUs" passHref>
                                            <Text as="a" cursor="pointer" onClick={(() => onClose())}>
                                                About Us
                                            </Text>
                                        </Link>
                                        <Spacer />
                                        <Link href="/contactUs" passHref>
                                            <Text as="a" cursor="pointer" onClick={(() => onClose())}>
                                                Contact Us
                                            </Text>
                                        </Link>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter>
                                    <VStack w="100%">
                                        {
                                            isAuthnticated ? ( // If it's authenticated show one thing, if not shows another
                                                <Flex align="center" justify="space-between" w="100%">
                                                    <Flex align="center">
                                                        <Avatar name={user.name} />
                                                        <Text mx="10px">{user.name}</Text>
                                                    </Flex>
                                                    <HStack>
                                                        <Box
                                                            as={"button"}
                                                            onClick={() => {
                                                                router.push(`/accountInfo/${user.id}`),
                                                                    onClose()
                                                            }}
                                                        >
                                                            <FiSettings size={25} />
                                                        </Box>
                                                        <Box
                                                            as={"button"}
                                                            onClick={() => {
                                                                router.push(`/favorites`),
                                                                    onClose()
                                                            }}
                                                        >
                                                            <AiFillHeart size={25} />
                                                        </Box>
                                                        <Box
                                                            as="button"
                                                            onClick={signOut}
                                                            ml="10px"
                                                        >
                                                            <FiLogOut size={25} />
                                                        </Box>
                                                    </HStack>
                                                </Flex>
                                            ) : (
                                                <>
                                                    <Center>
                                                        <LoginButton />
                                                        <RegisterButton />
                                                    </Center>
                                                </>
                                            )
                                        }
                                        <Box w="100%" maxW="360px" bg="#C29A76" h="124" as="button" fontSize='lg' color="#000">
                                            <Text>BOOK NOW</Text>
                                        </Box>
                                    </VStack>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Flex w="100%">
                            <Link href="/" passHref>
                                <Image
                                    boxSize='124px'
                                    objectFit='cover'
                                    src='/logo.png'
                                    alt='Logo'
                                    cursor='pointer'
                                />
                            </Link>
                            <Flex w="100%" justify="space-between" align="center" px="5">
                                <Box>
                                    {
                                        isAuthnticated ? (
                                            <>
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
                                                    <Link href="/aboutUs" passHref>
                                                        <Text as="a" cursor="pointer" pl="5">
                                                            About Us
                                                        </Text>
                                                    </Link>
                                                    <Spacer />
                                                    <Link href="/contactUs" passHref>
                                                        <Text as="a" cursor="pointer" pl="5">
                                                            Contact Us
                                                        </Text>
                                                    </Link>
                                                    <Spacer />
                                                    {
                                                        user.userType == "admin" &&
                                                        <Link href="/dashboard" passHref>
                                                            <Text as="a" cursor="pointer" pl="5">
                                                                Dashboard
                                                            </Text>
                                                        </Link>
                                                    }
                                                </Flex>
                                            </>
                                        ) : (

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
                                                <Link href="/aboutUs" passHref>
                                                    <Text as="a" cursor="pointer" pl="5">
                                                        About Us
                                                    </Text>
                                                </Link>
                                                <Spacer />
                                                <Link href="/contactUs" passHref>
                                                    <Text as="a" cursor="pointer" pl="5">
                                                        Contact Us
                                                    </Text>
                                                </Link>
                                                <Spacer />
                                            </Flex>
                                        )
                                    }
                                </Box>
                                <Spacer />
                                {
                                    isAuthnticated ? (
                                        <>
                                            <Menu>
                                                <MenuButton borderRadius="lg">
                                                    <Flex align="center">
                                                        <Text>{user.name}</Text>
                                                        <Avatar m="6px" name={user.name} />
                                                        <FiChevronDown />
                                                    </Flex>
                                                </MenuButton>
                                                <Portal>
                                                    <MenuList>
                                                        <MenuItem><Box as="button" onClick={() => router.push(`/accountInfo/${user.id}`)}>Settings</Box></MenuItem>
                                                        <MenuItem><Box as="button" onClick={() => router.push(`/favorites`)}>Favorites</Box></MenuItem>
                                                        <MenuItem as="button" onClick={signOut}>Log Out</MenuItem>
                                                    </MenuList>
                                                </Portal>
                                            </Menu>
                                        </>
                                    ) : (
                                        <>
                                            <LoginButton />
                                            <RegisterButton />
                                        </>
                                    )
                                }
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