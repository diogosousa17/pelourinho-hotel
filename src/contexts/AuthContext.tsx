import { createContext, useEffect, useState } from "react"
import { api } from '../services/api'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useRouter } from "next/router"

type User = {
    id: string,
    username: string,
    name: string,
    email: string,
    avatar: string,
    nif: number,
    dateBirthday: Date,
    phoneNumber: number,
    address: string,
    userType: string,
    favorites: any
}

type SignInData = {
    username: string,
    password: string
}

type AuthContextType = {
    isAuthnticated: boolean
    signIn: (data: SignInData) => Promise<void>
    user: any
    signOut: any
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {

    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    const isAuthnticated = !!user

    useEffect(() => {
        const { 'hotel.token': token } = parseCookies()

        if (token) {
            api.get('/auth/me', {
                headers: {
                    'authorization': token
                }
            }).then(response => {
                const { id, username, email, name, avatar, nif, dateBirthday, address, phoneNumber, userType, favorites } = response.data.decoded
                setUser({ id, username, email, name, avatar, nif, dateBirthday, address, phoneNumber, userType, favorites })
            })
        }

    }, [])

    async function signIn({ username, password }: SignInData) {
        try {
            const response = await api.post('/auth/login', {
                username: username,
                password: password
            })

            setCookie(undefined, 'hotel.token', response.data.token, {
                maxAge: 60 * 60 * 1, // 1h
            })

            api.get('/auth/me', {
                headers: {
                    'authorization': response.data.token
                }
            }).then(response => {
                const { id, username, email, name, avatar, nif, dateBirthday, address, phoneNumber, userType, favorites } = response.data.decoded
                setUser({ id, username, email, name, avatar, nif, dateBirthday, address, phoneNumber, userType, favorites })
            })
        } catch (err) {
            console.log(err)
        }
    }

    function signOut() {
        destroyCookie(undefined, 'hotel.token')
        router.reload()
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthnticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}