import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { api } from '../../services/api';

const Dashboard: NextPage = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const { 'hotel.token': token } = parseCookies()
        api.get('/auth/me', {
            headers: {
                'authorization': token
            }
        }).then(res => {
            setUser(res.data.decoded.userType)
        })
    }, [])

    return (
        <>
            {
                user[0] == "admin" &&
                <Sidebar />
            }
        </>
    )
}

export default Dashboard
