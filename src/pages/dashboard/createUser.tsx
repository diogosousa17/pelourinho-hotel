import { Center, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { parseCookies } from "nookies"
import { useContext, useEffect, useState } from "react"
import { CreateUsers } from "../../components/createUsers/createUsers"
import { AuthContext } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import { useRouter } from 'next/router'


const CreateUser: NextPage = () => {

    const [user, setUser] = useState([])
    const router = useRouter()
    const { isAuthnticated } = useContext(AuthContext)

    useEffect(() => {
        const { 'hotel.token': token } = parseCookies()

        if (!isAuthnticated) {
            router.push('/')
        } else {
            api.get('/auth/me', {
                headers: {
                    'authorization': token
                }
            }).then(res => {
                setUser(res.data.decoded.userType)
            })
        }
    }, [])

    return (
        <>
            {
                user[0] == "admin" ? (
                    <CreateUsers />
                ) : (
                    <Center h="calc(100vh - 124px)">
                        <Text fontSize={"26"}>Forbidden</Text>
                    </Center>
                )
            }
        </>
    )
}

export default CreateUser