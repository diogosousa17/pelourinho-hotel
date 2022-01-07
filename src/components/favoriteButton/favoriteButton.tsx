import { IconButton } from "@chakra-ui/react"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { api } from "../../services/api"


export function FavoriteButton({ bedroomId, tokens }: any) {

    const [isFavorite, setisFavorite] = useState(false)
    const { 'hotel.token': token }: any = parseCookies()
    const [user, setUser] = useState<any>([])

    useEffect(() => {

        const { 'hotel.token': token }: any = parseCookies()
        api.get('/auth/me', {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                api.get('/auth/user/' + res.data.decoded.id)
                    .then(res => {
                        setUser(res.data.favorites)
                    })
            })
    }, [isFavorite])

    const handleSetFavorites = (bedroomId: any, tokens: any) => {
        if (token && !isFavorite) {
            api.post('/auth/favorites', { data: bedroomId, tokens })
                .then(res => {
                    setisFavorite(true)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            api.delete('/auth/favorites', { headers: { "bedroomId": bedroomId, "userId": tokens } })
                .then(res => {
                    setisFavorite(false)
                }).catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <IconButton
            aria-label='favorites'
            bg="#FAE5E5"
            boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
                bg: '#FAE5E9',
            }}
            _focus={{
                bg: '#FAE5E9',
            }}
            onClick={() => handleSetFavorites(bedroomId, tokens)}
        >
            {
                user.includes(bedroomId) ? (

                    <AiFillHeart />
                ) : (
                    <AiOutlineHeart />
                )
            }
        </IconButton>
    )
}
