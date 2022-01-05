import { Badge, Button, Center, Flex, Heading, IconButton, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { api } from "../services/api";


const Favorites: NextPage = () => {

    const [favorites, setFavorites] = useState([])
    const [tokens, setTokens] = useState<any>('')
    const { 'hotel.token': token }: any = parseCookies()

    useEffect(() => {
        api.get('/auth/me', {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                setTokens(res.data)
            })

        api.get('/auth/favorites', { headers: { 'authorization': token } })
            .then(res => {
                setFavorites(res.data.favorites)
            }).catch(err => {
                console.log(err)
            })
    }, [])


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
                        favorites.map((favorite: any) => (
                            <>
                                <Center py={6}>
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
                                                src={favorite.imageURL}
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
                                                {favorite.bedroomName}
                                            </Heading>
                                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                                {favorite.price}€
                                            </Text>
                                            <Text
                                                textAlign={'center'}
                                                color={useColorModeValue('gray.700', 'gray.400')}
                                                px={3}
                                            >
                                                {favorite.description}
                                            </Text>
                                            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                                <Badge
                                                    px={2}
                                                    py={1}
                                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                                    fontWeight={'400'}>
                                                    {favorite.capacity} pessoa(s)
                                                </Badge>
                                                <Badge
                                                    px={2}
                                                    py={1}
                                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                                    fontWeight={'400'}>
                                                    {favorite.bedsNumber} cama(s)
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
                                                <IconButton
                                                    aria-label='favorites'
                                                    bg="#FAE5E5"
                                                    onClick={() => {
                                                        api.post('/auth/favorites', { data: favorite._id, tokens })
                                                            .then(res => {
                                                                console.log(res)
                                                            }).catch(err => {
                                                                console.log(err)
                                                            })
                                                    }}
                                                >
                                                    <AiOutlineHeart />
                                                </IconButton>
                                                <Link href={"/bedroom/" + favorite._id} passHref>
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
                        ))
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}

export default Favorites