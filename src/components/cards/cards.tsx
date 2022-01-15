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
    SimpleGrid,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from "react"
import { api } from '../../services/api'
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
    const { 'hotel.token': token }: any = parseCookies() // With this we can get the token from the user who it's logged in
    const [tokens, setTokens] = useState('')
    const { isAuthnticated } = useContext(AuthContext)


    useEffect(() => {
        if (token) { // If it's authenticated we get the token from /me to get the id of the user
            api.get('/auth/me', {
                headers: {
                    'authorization': token
                }
            })
                .then(res => {
                    setTokens(res.data.decoded.id)
                })
        }

        api.get("/bedrooms/bedroom", { // Get from API to get all the bedrooms and passing filter on dependency array so we can choose the filters
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
                                                    {bedroom.price}€/night
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
                                                        {bedroom.capacity} peolple
                                                    </Badge>
                                                    <Badge
                                                        px={2}
                                                        py={1}
                                                        bg={useColorModeValue('gray.50', 'gray.800')}
                                                        fontWeight={'400'}>
                                                        {bedroom.bedsNumber} beds
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
                                                    {
                                                        isAuthnticated ? ( // Favorite button that only shows if autenticated
                                                            <FavoriteButton bedroomId={bedroom._id} tokens={tokens} />
                                                        ) : (
                                                            <>
                                                            </>
                                                        )
                                                    }
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
                                                            SEE MORE
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
