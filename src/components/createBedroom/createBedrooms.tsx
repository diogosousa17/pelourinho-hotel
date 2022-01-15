import {
    Box,
    Center,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Select,
    Text,
    VStack,
    Button,
    Textarea,
    useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { Sidebar } from '../sidebar/sidebar'
import { ref, storage, uploadBytesResumable, getDownloadURL } from "../../services/firebase";

export function CreateBedrooms() {

    const toast = useToast() // Toast from Chakra
    const [characteristics, setcharacteristics] = useState([]) // State to keep the characteristics from the bedroom
    const { register, handleSubmit, formState: { isSubmitting } } = useForm() // React hook forms

    const onSubmit = async (data: any) => { // Upload the image to FireBase
        const storageRef = ref(storage, "images/" + data.images[0].name)
        await uploadBytesResumable(storageRef, data.images[0]) // We upload the image to firebase,
        await getDownloadURL(storageRef).then(async (res) => { // Then get the image link
            const newBedroom = {
                bedroomNumber: data.bedroomNumber,
                bedroomName: data.bedroomName,
                description: data.description,
                bedroomType: data.bedroomType,
                characteristics: characteristics,
                bedsNumber: data.bedsNumber,
                capacity: data.capacity,
                price: data.price,
                imageURL: res // After we get the link we send it to database
            }
            await api.post('/bedrooms/add', newBedroom) // Create new bedroom
                .then(res => {
                    toast({ // Success toast to inform the user success
                        position: 'top-start',
                        isClosable: true,
                        title: 'Bedroom created!',
                        status: 'success',
                    })
                    console.log(res)
                }).catch(err => {
                    toast({ // Error toast to inform the user error
                        position: 'top-start',
                        isClosable: true,
                        title: 'Error creating bedroom. Try again later.',
                        status: 'error',
                    })
                    console.log(err)
                })
        })
    }

    return (
        <>
            <Flex>
                <Sidebar />
                <Box overflowY="scroll" w="1648px" h="calc(100vh - 124px)" display="flex" flexDirection="column" justifyContent="center">
                    <Text textAlign="center" fontSize="4xl">Create Bedroom</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Center>
                            <VStack w="100%">
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder="Number"
                                    borderRadius="0"
                                    {...register("bedroomNumber")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Nome'
                                    borderRadius="0"
                                    {...register("bedroomName")}
                                />
                                <Textarea
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Description'
                                    borderRadius="0"
                                    {...register("description")}
                                />
                                <Select w="100%" maxW="300px" {...register("bedroomType")} borderRadius="0">
                                    <option value="Single">Single</option>
                                    <option value="Duo">Duo</option>
                                    <option value="Suíte">Suíte</option>
                                </Select>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button} w="100%" maxW="300px" borderRadius="0">
                                        Characteristics
                                    </MenuButton>
                                    <MenuList minWidth='300px'>
                                        <MenuOptionGroup type='checkbox' onChange={(e: any) => { setcharacteristics(e); }}>
                                            <MenuItemOption value='wifi'>Wi-Fi</MenuItemOption>
                                            <MenuItemOption value='varanda'>Varanda</MenuItemOption>
                                            <MenuItemOption value='arCondicionado'>Ar Condicionado</MenuItemOption>
                                            <MenuItemOption value='salaEstar'>Sala de Estar</MenuItemOption>
                                            <MenuItemOption value='tv'>TV</MenuItemOption>
                                            <MenuItemOption value='radio'>Rádio</MenuItemOption>
                                            <MenuItemOption value='casaBanhoChuveiro'>Casa de banho com Chuveiro</MenuItemOption>
                                            <MenuItemOption value='aquecimentoCentral'>Aquecimento Central</MenuItemOption>
                                        </MenuOptionGroup>
                                    </MenuList>
                                </Menu>
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Beds Number'
                                    borderRadius="0"
                                    {...register("bedsNumber")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Capacity'
                                    borderRadius="0"
                                    {...register("capacity")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Price'
                                    borderRadius="0"
                                    {...register("price")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    borderRadius="0"
                                    type="file"
                                    {...register("images")}
                                />
                                <Button type="submit" w="100%" maxW="300px" isLoading={isSubmitting} borderRadius="0" bgColor="#C29A76">CREATE</Button>
                            </VStack>
                        </Center>
                    </form>
                </Box>
            </Flex>
        </>
    )
}