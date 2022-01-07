import { GetServerSideProps, NextPage } from "next"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { UsersDashboard } from "../../components/usersDashboard/usersDashboard"
import { api } from "../../services/api"


const Users: NextPage = () => {

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
                <UsersDashboard />
            }
        </>
    )
}

export default Users