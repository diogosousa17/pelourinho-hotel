import { GetServerSideProps, NextPage } from "next"
import { UsersDashboard } from "../../components/usersDashboard/usersDashboard"


const Users: NextPage = () => {
    return (
        <UsersDashboard />
    )
}

export default Users