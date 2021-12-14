import { createContext, useState } from "react"
import { api } from '../services/api'
import { setCookie } from 'nookies'
import Router from 'next/router'

type User = {
    username: string,
    userType: string,
    name: string,
    email: string
}

type SignInData = {
    username: string,
    password: string
}

type AuthContextType = {
    isAuthnticated: boolean
    signIn: (data: SignInData) => Promise<void>
    user: any
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthnticated = !!user

    async function signIn({ username, password }: SignInData) {
        try {
            const response = await api.post('/auth/login', {
                username: username,
                password: password
            })
            setCookie(undefined, 'hotel.token', response.data.token, {
                maxAge: 60 * 60 * 1, // 1h
            })

            setUser(user)
            Router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthnticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}