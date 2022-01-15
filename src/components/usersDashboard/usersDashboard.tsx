import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { api } from "../../services/api";
import { Sidebar } from "../sidebar/sidebar";


export function UsersDashboard() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get("/auth/allUsers") // Get all the users from API
            .then((res) =>
                setUsers(res.data)
            )
            .catch((err) => {
                console.error("Erro: " + err)
            })
    }, [users])

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
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">NIF</Text>
                                            <Text>123456789</Text>
                                        </VStack>
                                        <VStack>
                                            <IconButton
                                                aria-label='Delete User'
                                                icon={<RiDeleteBin5Line />}
                                                onClick={async () => {
                                                    await api.delete(`/auth/user/${user._id}`) // Delete one user
                                                        .then(res => {
                                                            const find = users.findIndex((us: any) => us._id = user._id)
                                                            users.splice(find, 1)
                                                            setUsers(users)
                                                        })
                                                }}
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