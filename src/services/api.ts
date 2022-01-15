import axios from "axios"
import { parseCookies } from "nookies"

const { 'token': token} = parseCookies()
// Connection to API
export const api = axios.create({
    baseURL: "http://localhost:3333",
})

if(token) {
    api.defaults.headers.common['authorization'] =`Bearer ${token}`
}