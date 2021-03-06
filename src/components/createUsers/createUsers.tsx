import { Box, Button, Center, Flex, Input, Select, Text, Textarea, useToast, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Sidebar } from "../sidebar/sidebar";


export function CreateUsers() {

    const toast = useToast()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data: any) => {
        const newUser = {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password,
            dateBirthday: data.dateBirthday,
            nif: data.nif,
            userType: data.userType
        }
        await api.post('/auth/register', newUser) // Register new user
            .then(res => {
                toast({ // Success toast to inform the user success
                    position: 'top-start',
                    isClosable: true,
                    title: 'Utilizador criado com sucesso!',
                    status: 'success',
                })
            })
            .catch(err => {
                toast({ // Error toast to inform the user error
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao criar utilizador. Tente novamente mais tarde.',
                    status: 'error',
                })
            })
    }

    return (
        <>
            <Flex>
                <Sidebar />
                <Box overflowY="scroll" w="1648px" h="calc(100vh - 124px)" display="flex" flexDirection="column" justifyContent="center">
                    <Text textAlign="center" fontSize="4xl">Create user</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Center>
                            <VStack w="100%">
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder="Username"
                                    borderRadius="0"
                                    {...register("username")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Name'
                                    borderRadius="0"
                                    {...register("name")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Email'
                                    borderRadius="0"
                                    {...register("email")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    borderRadius="0"
                                    type="date"
                                    {...register("dateBirthday")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='NIF'
                                    borderRadius="0"
                                    {...register("nif")}
                                />
                                <Input
                                    w="100%"
                                    maxW="300px"
                                    placeholder='Password'
                                    borderRadius="0"
                                    type="password"
                                    {...register("password")}
                                />
                                <Select w="100%" maxW="300px" {...register("userType")} borderRadius="0">
                                    <option value="publico">Public</option>
                                    <option value="admin">Admin</option>
                                </Select>
                                <Button type="submit" w="100%" maxW="300px" isLoading={isSubmitting} borderRadius="0" bgColor="#C29A76">CRIAR</Button>
                            </VStack>
                        </Center>
                    </form>
                </Box>
            </Flex>
        </>
    )
}