import { Center, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { parseCookies } from "nookies"
import { useContext, useEffect, useState } from "react"
import { UsersDashboard } from "../../components/usersDashboard/usersDashboard"
import { AuthContext } from "../../contexts/AuthContext"
import { api } from "../../services/api"


const Users: NextPage = () => {

    const router = useRouter()
    const [user, setUser] = useState([])
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
                    <UsersDashboard />
                ) : (
                        <Center h="calc(100vh - 124px)">
                            <Text fontSize={"26"}>Forbidden</Text>
                        </Center>
                )
            }
        </>
    )
}

export default Users