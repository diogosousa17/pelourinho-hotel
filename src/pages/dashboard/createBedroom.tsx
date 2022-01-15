import { Center, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { CreateBedrooms } from "../../components/createBedroom/createBedrooms";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";


const CreateBedroom: NextPage = () => {

    const router = useRouter()
    const [user, setUser] = useState([])
    const { isAuthnticated } = useContext(AuthContext)

    useEffect(() => {
        const { 'hotel.token': token } = parseCookies()

        if (!token) { // If it's logged we fetch the token else it redirects to homepage
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

    useEffect(() => {
        if (user[0] == "publico") {
            router.push("/")
        }
    })

    return (
        <>
            { // If the user is admin it shows the dashboard, else shows forbidden
                user[0] == "admin" ? (
                    <CreateBedrooms />
                ) : (
                    <Center h="calc(100vh - 124px)">
                        <Text fontSize={"26"}>Forbidden</Text>
                    </Center>
                )
            }
        </>
    )
}

export default CreateBedroom