import { Box, Button, Divider, Flex, FormControl, FormLabel, HStack, IconButton, Image, Input, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RiDeleteBin5Line, RiDeleteBack2Fill } from "react-icons/ri"
import { MdDriveFileRenameOutline } from "react-icons/md"
import { api } from "../../services/api"
import { useForm } from "react-hook-form"
import { Sidebar } from "../sidebar/sidebar"


export function BedroomsDashboard() {

    const [bedrooms, setBedrooms] = useState<any>([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    useEffect(() => {
        api.get("/bedrooms/bedroom", {
        })
            .then((response) => setBedrooms(response.data))
            .catch((err) => {
                console.error("Erro: " + err)
            })
    })

    const onSubmit = () => {

    }

    return (
        <>
            <Flex>
                <Sidebar />
                <Box overflowY="scroll" h="calc(100vh - 124px)" w="1648px">
                    {
                        bedrooms.map((bedroom: any) => {
                            return (
                                <>
                                    <HStack spacing={10} mt="10px">
                                        <Image
                                            src={bedroom.imageURL}
                                            w="120px"
                                            h="120px"
                                            borderRadius="8px"
                                            objectFit="cover"
                                        />
                                        <Text fontSize="lg" fontWeight="bold">{bedroom.bedroomNumber}</Text>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">NOME</Text>
                                            <Text>{bedroom.bedroomName}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">TIPO</Text>
                                            <Text>{bedroom.bedroomType}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">CAMAS</Text>
                                            <Text>{bedroom.bedsNumber}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">CAPACIDADE</Text>
                                            <Text>{bedroom.capacity} Pessoas</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">PREÇO</Text>
                                            <Text>{bedroom.price}€</Text>
                                        </VStack>
                                        <HStack>
                                            <IconButton
                                                aria-label='Edit Bedroom'
                                                icon={<MdDriveFileRenameOutline />}
                                                onClick={onOpen}
                                            />
                                            <IconButton
                                                aria-label='Delete Bedroom'
                                                icon={<RiDeleteBin5Line />}
                                                onClick={() => { api.delete(`/bedrooms/bedroom/${bedroom._id}`) }}
                                            />
                                        </HStack>
                                    </HStack>
                                    <Divider />
                                </>
                            )
                        })
                    }
                </Box>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Reservar Quarto</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl>
                                    <FormLabel>Nome do Quarto</FormLabel>
                                    <Input
                                        {...register("bedroomName")}
                                    />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Descrição</FormLabel>
                                    <Textarea
                                        {...register("description")}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Tipo de Quarto</FormLabel>
                                    <Select {...register("bedroomType")}>
                                        <option value="Single">Single</option>
                                        <option value="Duo">Duo</option>
                                        <option value="Suíte">Suíte</option>
                                    </Select>
                                </FormControl>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>
                                        Características
                                    </MenuButton>
                                    <MenuList minWidth='240px'>
                                        <MenuDivider />
                                        <MenuOptionGroup title='Características' type='checkbox'>
                                            <MenuItemOption value='Wi-Fi'>Wi-Fi</MenuItemOption>
                                            <MenuItemOption value='Varanda'>Varanda</MenuItemOption>
                                            <MenuItemOption value='Ar Condicionado'>Ar Condicionado</MenuItemOption>
                                            <MenuItemOption value='Sala de Estar'>Sala de Estar</MenuItemOption>
                                            <MenuItemOption value='TV'>TV</MenuItemOption>
                                            <MenuItemOption value='Rádio'>Rádio</MenuItemOption>
                                            <MenuItemOption value='Casa de Banho com Chuveiro'>Casa de banho com Chuveiro</MenuItemOption>
                                            <MenuItemOption value='Aquecimento Central'>Aquecimento Central</MenuItemOption>
                                        </MenuOptionGroup>
                                    </MenuList>
                                </Menu>
                                <FormControl>
                                    <FormLabel>Número de Camas</FormLabel>
                                    <Input
                                        {...register("bedsNumber")}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Capacidade</FormLabel>
                                    <Input
                                        {...register("capacity")}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Preço</FormLabel>
                                    <Input
                                        {...register("price")}
                                    />
                                </FormControl>
                                <Button colorScheme='blue' mr={3} type="submit" isLoading={isSubmitting}>
                                    Reservar Quarto
                                </Button>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </>
    )
}