import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,
    Center,
    Text,
    Input,
    VStack,
    Box,
    DrawerHeader,
    IconButton,
    Flex,
    useToast,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
export function LoginButton() {

    const router = useRouter()
    const { signIn } = useContext(AuthContext) // We get this from the context hook to make the login
    const { register, handleSubmit, formState: { isSubmitting } } = useForm() // React hook forms

    async function handleSignIn(data: any) {
        await signIn(data)
        router.push('/')
    }

    const [size, setSize] = React.useState('full') // Drawer full size from Chakra
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize: any) => {
        setSize(newSize)
        onOpen()
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <>
            <Box
                as="button"
                w="100px"
                h="54px"
                onClick={() => handleClick(size)}
                key={size}
                outline="0"
            >
                <Text decoration="underline">Login</Text>
            </Box>
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size={size}
            >
                <DrawerOverlay />
                <DrawerContent bgColor="#C29A76">
                    <Flex w="100%" justify="flex-end">
                        <DrawerHeader>
                            <IconButton
                                as="a"
                                onClick={() => handleClose()}
                                cursor="pointer"
                                aria-label='Close Drawer'
                                bgColor="#C29A76"
                            >
                                <Text>X</Text>
                            </IconButton>
                        </DrawerHeader>
                    </Flex>
                    <DrawerBody>
                        <Center h="100%" w="100%">
                            <VStack>
                                <Text fontSize='5xl' fontWeight='bold' textAlign="center">Login</Text>
                                <form onSubmit={handleSubmit(handleSignIn)}>
                                    <Input
                                        id="username"
                                        w="100%"
                                        maxW="550px"
                                        h="50px"
                                        bgColor="#FFFF"
                                        type="text"
                                        borderRadius="0"
                                        borderWidth='0px'
                                        placeholder="Username"
                                        {...register("username")}
                                        mb="10px"
                                    />
                                    <Input
                                        id="password"
                                        w="100%"
                                        maxW="550px"
                                        h="50px"
                                        bgColor="#FFFF"
                                        borderRadius="0"
                                        borderWidth='0px'
                                        placeholder="Password"
                                        type="password"
                                        {...register("password")}
                                        mb="10px"
                                    />
                                    <Center>
                                        <Button
                                            w="225px"
                                            h="16"
                                            borderRadius="0"
                                            border="4px"
                                            borderColor="#FFFF"
                                            variant='outline'
                                            color="#FFFF"
                                            fontSize="2xl"
                                            _hover={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                                            _focus={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            LOGIN
                                        </Button>
                                    </Center>
                                </form>
                                <Center>
                                    <Link href="/resetPassword" passHref>
                                        <Box as="a" onClick={handleClose}>
                                            <Text textAlign="center">Forgot Password? Recover here!</Text>
                                        </Box>
                                    </Link>
                                </Center>
                                <Center>
                                </Center>
                            </VStack>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}