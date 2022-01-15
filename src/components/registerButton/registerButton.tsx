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
    Flex,
    DrawerHeader,
    IconButton,
    useToast
}
    from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'

export function RegisterButton() {

    const toast = useToast()

    const [size, setSize] = React.useState('full') // Drawer full size from Chakra
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const handleClick = (newSize: any) => {
        setSize(newSize)
        onOpen()
    }

    const handleClose = () => {
        onClose()
    }

    const onSubmit = async (data: any) => {
        const newUser = {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password,
            dateBirthday: data.dateBirthday,
            nif: data.nif
        }
        await api.post('/auth/register', newUser) // Register new user
            .then(res => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Conta criada com sucesso!',
                    status: 'success',
                })
            })
            .catch(err => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao criar conta. Tente novamente mais tarde.',
                    status: 'error',
                })
            })
    }

    return (
        <>
            <Box
                as="button"
                w="124px"
                h="54px"
                border="2px"
                borderColor="#C29A76"
                onClick={() => handleClick(size)}
                key={size}
                outline="0"
            >
                Register
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
                    <Center>
                        <DrawerBody w="100%" h="90vh" display="flex" align="center">
                            <Center h="100%" w="100%" mx="10px">
                                <VStack h="100%" justify="center">
                                    <Text
                                        fontSize='5xl'
                                        fontWeight='bold'
                                        textAlign="center"
                                    >
                                        Register
                                    </Text>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="text"
                                            borderRadius="0"
                                            placeholder="Username"
                                            border="0px"
                                            {...register("username")}
                                            mb="10px"
                                        />
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="text"
                                            borderRadius="0"
                                            placeholder="Name"
                                            border="0px"
                                            {...register("name")}
                                            mb="10px"
                                            ml="10px"
                                        />
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="email"
                                            borderRadius="0"
                                            placeholder="Email"
                                            border="0px"
                                            {...register("email")}
                                            mb="10px"
                                        />
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="date"
                                            borderRadius="0"
                                            border="0px"
                                            {...register("dateBirthday")}
                                            mb="10px"
                                            ml="10px"
                                        />
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="number"
                                            placeholder="NIF"
                                            borderRadius="0"
                                            border="0px"
                                            {...register("nif")}
                                            mb="10px"
                                        />
                                        <Input
                                            w="100%"
                                            maxW="550px"
                                            h="50px"
                                            bgColor="#FFFF"
                                            type="password"
                                            borderRadius="0"
                                            placeholder="Password"
                                            border="0px"
                                            {...register("password")}
                                            mb="10px"
                                            ml="10px"
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
                                                CREATE
                                            </Button>
                                        </Center>
                                    </form>
                                </VStack>
                            </Center>
                        </DrawerBody>
                    </Center>
                </DrawerContent>
            </Drawer>
        </>
    )
}