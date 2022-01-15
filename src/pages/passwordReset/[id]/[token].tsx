import {
    Button,
    Input,
    Text,
    useToast,
    VStack
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";


const PasswordReset: NextPage = ({ params }: any) => {

    const toast = useToast()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm() // React Hook Forms
    const { id, token } = params // User ID and token from props

    const onSubmit = async (data: any) => {
        const password = {
            password: data.password
        }

        await api.post(`/auth/resetPassword/${id}/${token}`, password) // Post to API with the new password
            .then(res => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Password alterada com sucesso!',
                    status: 'success',
                })
                console.log(res)
            }).catch(err => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao alterar password. Tente novamente mais tarde.',
                    status: 'error',
                })
                console.log(err)
            })
    }

    return (
        <>
            <VStack h="calc(100vh - 124px)" w="100%" justify="center">
                <Text fontSize="3xl">Alterar Password</Text>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                    <VStack justify="center">
                        <Input
                            type="password"
                            borderRadius="0"
                            w="100%"
                            maxW="400px"
                            {...register("password")}
                        />
                        <Button type="submit" borderRadius="0" w="100%" maxW="400px" bgColor="#C29A76" isLoading={isSubmitting}>Alterar</Button>
                    </VStack>
                </form>
            </VStack>
        </>
    )
}

export default PasswordReset

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    // Here we get the user id and a token that comes in the email link from recover password
    return {
        props: {
            params
        },
    }
}