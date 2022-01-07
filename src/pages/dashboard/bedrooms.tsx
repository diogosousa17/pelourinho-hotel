import { NextPage } from "next"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { BedroomsDashboard } from "../../components/bedroomsDashboard/bedroomsDashboard"
import { api } from "../../services/api"


const Bedrooms: NextPage = () => {

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
                <BedroomsDashboard />
            }
        </>
    )
}

export default Bedrooms