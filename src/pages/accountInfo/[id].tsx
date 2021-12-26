import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
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
    const { _id, name, email, nif, dateBirthday, phoneNumber, address } = data


    const onSubmit = async (data: any) => {
        const changeUser = {
            name: data.name,
            email: data.email,
            nif: data.nif,
            dateBirthday: data.dateBirthday,
            phoneNumber: data.phoneNumber,
            address: data.address
        }
        await api.put(`/auth/user/${_id}`, changeUser)
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
            <Center>
                <Box
                    h="calc(100vh - 124px)"
                    w="100%"
                    maxW="3xl"
                >
                    <VStack mx="5">
                        <Center>
                            <Text fontSize='4xl' mt="24" textAlign="center">Definições de Conta</Text>
                        </Center>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <VStack>
                                <FormControl isRequired>
                                    <FormLabel>Nome</FormLabel>
                                    <Input
                                        defaultValue={name}
                                        {...register("name")}
                                        type="text"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        defaultValue={email}
                                        {...register("email")}
                                        type="email"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Nif</FormLabel>
                                    <NumberInput
                                        defaultValue={nif}

                                    >
                                        <NumberInputField
                                            {...register("nif")}
                                            pattern="[0-9]{9}"
                                        />
                                    </NumberInput>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <Input
                                        defaultValue={format(new Date(data.dateBirthday), 'yyyy-MM-dd')}
                                        {...register("dateBirthday")}
                                        type="date"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Telemóvel</FormLabel>
                                    <NumberInput
                                        defaultValue={phoneNumber}
                                    >
                                        <NumberInputField
                                            {...register("phoneNumber")}
                                            pattern="[0-9]{9}"
                                        />
                                    </NumberInput>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Morada</FormLabel>
                                    <Input
                                        defaultValue={address}
                                        {...register("address")}
                                        type="text"
                                    />
                                </FormControl>
                                <Center>
                                    <Button type="submit" isLoading={isSubmitting}>Alterar Dados</Button>
                                </Center>
                            </VStack>
                        </form>
                    </VStack>
                </Box>
            </Center>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

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