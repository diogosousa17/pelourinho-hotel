import type { NextPage } from 'next'
import { useContext } from 'react'
import { HomePage } from '../components/homepage/homepage'
import { AuthContext } from '../contexts/AuthContext'

const Home: NextPage = () => {

  const { signIn } = useContext(AuthContext)

  function handleSignIn() {
    const username = "diogoadmin"
    const password = "12345"
    signIn({ username, password })
  }

  return (
    <>
      <HomePage />
      <button onClick={handleSignIn}>teste</button>
    </>
  )
}

export default Home
