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
    Stack,
    Box,
    DrawerFooter
}
    from '@chakra-ui/react'
import React from 'react'

export function RegisterButton() {

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
                    <DrawerBody>
                        <Center h="100%">
                            <Stack spacing={'4'}>
                                <Text fontSize='5xl' fontWeight='bold' textAlign="center">Registo</Text>
                                <Input w="550px" h="50px" bgColor="#FFFF" type="text" borderRadius="0" placeholder="Primeiro Nome" border="0px" />
                                <Input w="550px" h="50px" bgColor="#FFFF" type="text" borderRadius="0" placeholder="Último Nome" border="0px" />
                                <Input w="550px" h="50px" bgColor="#FFFF" type="email" borderRadius="0" placeholder="Email" border="0px" />
                                <Input w="550px" h="50px" bgColor="#FFFF" type="password" borderRadius="0" placeholder="Password" border="0px" />
                                <Input w="550px" h="50px" bgColor="#FFFF" type="password" borderRadius="0" placeholder="Repetir a Password" border="0px" />
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
                                        Criar conta
                                    </Button>
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