import { Center, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useContext, useEffect, useState } from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';

const Dashboard: NextPage = () => {

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
                    <Sidebar />
                ) : (
                    <Center h="calc(100vh - 124px)">
                        <Text fontSize={"26"}>Forbidden</Text>
                    </Center>
                )
            }
        </>
    )
}

export default Dashboard
