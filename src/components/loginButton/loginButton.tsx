import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure, Center, Text, Input, Stack, Box, DrawerFooter } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export function LoginButton() {

    const [size, setSize] = React.useState('full')
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
                    <DrawerBody>
                        <Center h="100%">
                            <Stack spacing={'4'}>
                                <Text fontSize='5xl' fontWeight='bold' textAlign="center">Login</Text>
                                <Input w="550px" h="50px" bgColor="#FFFF" type="email" borderRadius="0" borderWidth='0px' placeholder="Email" />
                                <Input w="550px" h="50px" bgColor="#FFFF" type="password" borderRadius="0" borderWidth='0px' placeholder="Password" />
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
                                    >
                                        Entrar
                                    </Button>
                                </Center>
                                <Center>
                                    <Link href="/" passHref>
                                        <Box as="a">
                                            <Text fontSize="md">Esqueceu-se da Palavra-Passe? Recuperar!</Text>
                                        </Box>
                                    </Link>
                                </Center>
                                <Center>
                                    <Link href="/" passHref>
                                        <Box as="a">
                                            <Text>Ainda não tem conta? Criar uma nova!</Text>
                                        </Box>
                                    </Link>
                                </Center>
                                <Center>
                                </Center>
                            </Stack>
                        </Center>
                    </DrawerBody>
                    <DrawerFooter>
                        <Box
                            as="a"
                            onClick={() => handleClose()}
                            cursor="pointer"
                        >
                            <Text>Para sair pressione Esc ou clique aqui para retornar.</Text>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}