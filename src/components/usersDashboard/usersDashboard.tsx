import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { api } from "../../services/api";
import { Sidebar } from "../sidebar/sidebar";


export function UsersDashboard() {

    const router = useRouter()
    const [users, setUsers] = useState([])
    const secretKey = "superscret"

    useEffect(() => {
        const { 'hotel.token': token } = parseCookies()
        api.get("/auth/allUsers", { headers: { 'authorization': token, 'secret': secretKey } })
            .then((res) =>
                setUsers(res.data)
            )
            .catch((err) => {
                console.error("Erro: " + err)
            })
    }, [])

    return (
        <>
            <Flex>
                <Sidebar />
                <Box overflowY="scroll" h="calc(100vh - 124px)" w="1648px">
                    {
                        users.map((user: any) => {
                            return (
                                <>
                                    <HStack spacing={10} mt="10px">
                                        <Image
                                            src="/avatar.png"
                                            w="120px"
                                            h="120px"
                                            borderRadius="8px"
                                        />
                                        <Text fontSize="lg" fontWeight="bold">{user.name}</Text>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">EMAIL</Text>
                                            <Text>{user.email}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">ADDRESS</Text>
                                            <Text>{user.address}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">PHONE NUMBER</Text>
                                            <Text>{user.phoneNumber}</Text>
                                        </VStack>
                                        {/* <VStack align="flex-start">
                                    <Text fontWeight="medium">NIF</Text>
                                    <Text>123456789</Text>
                                </VStack> */}
                                        <VStack>
                                            <IconButton
                                                aria-label='Delete User'
                                                icon={<RiDeleteBin5Line />}
                                                onClick={() => { api.delete(`/auth/user/${user._id}`).then(res => { router.reload() }) }}
                                            />
                                        </VStack>
                                    </HStack>
                                </>
                            )
                        })
                    }
                </Box>
            </Flex>
        </>
    )
}