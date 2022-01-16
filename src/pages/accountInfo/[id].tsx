import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    NumberInput,
    NumberInputField,
    Stack,
    Text,
    useToast,
    VStack
} from "@chakra-ui/react"
import { format } from "date-fns"
import { GetServerSideProps, NextPage } from "next"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"


const AccountInfo: NextPage = ({ data }: any) => {

    const toast = useToast()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const { _id, name, email, nif, dateBirthday, phoneNumber, address } = data // Here we get the info of the user from props


    const onSubmit = async (data: any) => {
        const changeUser = {
            name: data.name,
            email: data.email,
            nif: data.nif,
            dateBirthday: data.dateBirthday,
            phoneNumber: data.phoneNumber,
            address: data.address
        }
        await api.put(`/auth/updateUser/${_id}`, changeUser) // Post to API to change the user info
            .then(res => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Dados alterados com sucesso!',
                    status: 'success',
                })
            })
            .catch(err => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao alterar dados. Tente novamente mais tarde.',
                    status: 'error',
                })
            })
    }

    return (
        <>
            <Box
                h="calc(100vh - 124px)"
                w="100%"
            >
                <Center>
                    <Text fontSize='4xl' mt="24" textAlign="center">Account Settings</Text>
                </Center>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mx="10px">
                        <VStack maxW="500px" mx="auto">
                            <FormControl isRequired>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    defaultValue={name}
                                    {...register("name")}
                                    borderRadius="0"
                                    type="text"
                                    w="100%"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    defaultValue={email}
                                    {...register("email")}
                                    borderRadius="0"
                                    type="email"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Nif</FormLabel>
                                <NumberInput
                                    defaultValue={nif}
                                    borderRadius="0"
                                >
                                    <NumberInputField
                                        {...register("nif")}
                                        pattern="[0-9]{9}"
                                        borderRadius="0"
                                    />
                                </NumberInput>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Date of Birthday</FormLabel>
                                <Input
                                    defaultValue={format(new Date(data.dateBirthday), 'yyyy-MM-dd')}
                                    {...register("dateBirthday")}
                                    type="date"
                                    borderRadius="0"
                                    w="100%"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <NumberInput
                                    defaultValue={phoneNumber}
                                >
                                    <NumberInputField
                                        {...register("phoneNumber")}
                                        pattern="[0-9]{9}"
                                        borderRadius="0"
                                    />
                                </NumberInput>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    defaultValue={address}
                                    {...register("address")}
                                    type="text"
                                    borderRadius="0"
                                    w="100%"
                                />
                            </FormControl>
                            <Button type="submit" isLoading={isSubmitting} w="100%" maxW="500px" borderRadius="0" bgColor="#C29A76" colorScheme="#C29A76">CHANGE</Button>
                        </VStack>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    // Fetch with SSR to get the info of the user
    const { id }: any = params
    const res = await fetch(`http://localhost:3333/auth/user/${id}`)
    const data = await res.json()

    return {
        props: {
            data
        },
    }
}

export default AccountInfo