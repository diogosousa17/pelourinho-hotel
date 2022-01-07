import { NextPage } from "next"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { CreateUsers } from "../../components/createUsers/createUsers"
import { api } from "../../services/api"


const CreateUser: NextPage = () => {

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
                <CreateUsers />
            }
        </>
    )
}

export default CreateUser