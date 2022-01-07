import {
    Image,
    Text,
    Flex,
    Center,
    Stack,
    useColorModeValue,
    Heading,
    Badge,
    Button,
    IconButton,
    SimpleGrid,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from "react"
import { api } from '../../services/api'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { parseCookies } from 'nookies'
import { FavoriteButton } from '../favoriteButton/favoriteButton'
import { AuthContext } from '../../contexts/AuthContext'

type Bedroom = {
    _id: string,
    bedroomName: string,
    description: string,
    capacity: Number,
    bedsNumber: Number,
    price: Number,
    imageURL: string
}

export function Cards({ filter }: any) {

    const [bedrooms, setBedrooms] = useState([])
    const [favorites, setFavorites] = useState<any>([])
    const [isFavorite, setisFavorite] = useState(false)
    const { 'hotel.token': token }: any = parseCookies()
    const [tokens, setTokens] = useState('')
    

    useEffect(() => {
        api.get('/auth/me', {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                setTokens(res.data.decoded.id)
            })

        api.get("/bedrooms/bedroom", {
            params: filter
        })
            .then((response) => setBedrooms(response.data))
            .catch((err) => {
                console.error("Erro: " + err)
            })
    }, [filter])

    return (
        <>
            <Center>
                <SimpleGrid
                    w="100%"
                    columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
                    spacing={5}
                    my="10px"
                    px="10px"
                >
                    {
                        bedrooms.map((bedroom: Bedroom) => {
                            return (
                                <>
                                    <Center py={6} key={bedroom._id}>
                                        <Stack
                                            borderWidth="1px"
                                            borderRadius="lg"
                                            w={{ sm: '100%', md: '540px' }}
                                            height={{ sm: '700px', md: '20rem' }}
                                            direction={{ base: 'column', md: 'row' }}
                                            bg={useColorModeValue('white', 'gray.900')}
                                            boxShadow={'2xl'}
                                            padding={4}
                                        >
                                            <Flex flex={1} bg="blue.200">
                                                <Image
                                                    objectFit="cover"
                                                    boxSize="100%"
                                                    src={bedroom.imageURL}
                                                />
                                            </Flex>
                                            <Stack
                                                flex={1}
                                                flexDirection="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                p={1}
                                                pt={2}
                                            >
                                                <Heading fontSize={'2xl'} fontFamily={'body'}>
                                                    {bedroom.bedroomName}
                                                </Heading>
                                                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                                    {bedroom.price}€
                                                </Text>
                                                <Text
                                                    textAlign={'center'}
                                                    color={useColorModeValue('gray.700', 'gray.400')}
                                                    px={3}
                                                    noOfLines={3}
                                                >
                                                    {bedroom.description}
                                                </Text>
                                                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                                    <Badge
                                                        px={2}
                                                        py={1}
                                                        bg={useColorModeValue('gray.50', 'gray.800')}
                                                        fontWeight={'400'}>
                                                        {bedroom.capacity} pessoa(s)
                                                    </Badge>
                                                    <Badge
                                                        px={2}
                                                        py={1}
                                                        bg={useColorModeValue('gray.50', 'gray.800')}
                                                        fontWeight={'400'}>
                                                        {bedroom.bedsNumber} cama(s)
                                                    </Badge>
                                                </Stack>
                                                <Stack
                                                    width={'100%'}
                                                    mt={'2rem'}
                                                    direction={'row'}
                                                    padding={2}
                                                    justifyContent={'space-between'}
                                                    alignItems={'center'}
                                                >
                                                    <FavoriteButton bedroomId={bedroom._id} tokens={tokens} />
                                                    <Link href={"/bedroom/" + bedroom._id} passHref>
                                                        <Button
                                                            flex={1}
                                                            fontSize={'sm'}
                                                            rounded={'full'}
                                                            bg={'#C29A76'}
                                                            color={'white'}
                                                            boxShadow={
                                                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                                            }
                                                            _hover={{
                                                                bg: '#C29B80',
                                                            }}
                                                            _focus={{
                                                                bg: '#C29B80',
                                                            }}
                                                        >
                                                            Ver Mais
                                                        </Button>
                                                    </Link>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Center>
                                </>
                            )
                        })
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}
