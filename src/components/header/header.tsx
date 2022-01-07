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
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Link from 'next/link'
import { LoginButton } from '../loginButton/loginButton'
import { RegisterButton } from '../registerButton/registerButton'
import { FiMenu, FiChevronDown, FiSettings, FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'

import { useRouter } from 'next/router'

export function Header() {

    const { user, isAuthnticated, signOut } = useContext(AuthContext)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter()

    const wide = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <>
            {
                !wide ? (
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
                                        <Link href="/contactUs" passHref>
                                            <Text as="a" cursor="pointer">
                                                Contact Us
                                            </Text>
                                        </Link>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter>
                                    <VStack w="100%">
                                        {
                                            isAuthnticated ? (
                                                <Flex align="center" justify="space-between" w="100%">
                                                    <Flex align="center">
                                                        <Avatar name={user.username} />
                                                        <Text>{user.username}</Text>
                                                    </Flex>
                                                    <Flex>
                                                        <Text><FiSettings size={25} /></Text>
                                                        <Box as="button" onClick={signOut} ml="10px"><FiLogOut size={25} /></Box>
                                                    </Flex>
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
                                                    <Link href="/" passHref>
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
                                                <Link href="/" passHref>
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
                                                        <Text>{user.username}</Text>
                                                        <Avatar m="6px" name={user.name} />
                                                        <FiChevronDown />
                                                    </Flex>
                                                </MenuButton>
                                                <Portal>
                                                    <MenuList>
                                                        <MenuItem><Box as="button" onClick={() => router.push(`/accountInfo/${user.id}`)}>Definições de Conta</Box></MenuItem>
                                                        <MenuItem><Box as="button" onClick={() => router.push(`/favorites`)}>Favoritos</Box></MenuItem>
                                                        <MenuItem as="button" onClick={signOut}>Sair</MenuItem>
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