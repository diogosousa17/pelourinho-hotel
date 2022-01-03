import { Box, Button, Center, Flex, Input, Text, useToast, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";


export function ResetPass() {

    const toast = useToast()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data: any) => {
        const recover = {
            email: data.email
        }

        await api.post('/auth/resetPassword', recover)
            .then(res => {
                console.log(res)
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Email enviado com sucesso!',
                    status: 'success',
                })

            }).catch(err => {
                console.log(err)
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao enviar email. Tente novamente mais tarde.',
                    status: 'error',
                })
            })
    }

    return (
        <>
            <VStack h="calc(100vh - 124px)" w="100%" justify="center">
                <Text fontSize="3xl">Insira o email para a recuperação de password:</Text>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                    <VStack w="100%">
                        <Input
                            w="100%"
                            maxW="400px"
                            borderRadius="0"
                            type="email"
                            {...register("email")}
                        />
                        <Button
                            type="submit"
                            borderRadius="0"
                            bgColor="#C29A76"
                            w="100%"
                            maxW="400px"
                            isLoading={isSubmitting}
                        >
                            Enviar
                        </Button>
                    </VStack>
                </form>
            </VStack>
        </>
    )
}