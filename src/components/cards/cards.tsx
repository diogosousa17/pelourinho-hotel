import {
    Box,
    Grid,
    Image,
    Text,
    Flex,
    Center,
    Stack,
    useColorModeValue,
    Heading,
    Badge,
    Button
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react"
import { api } from '../../services/api'

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

    const router = useRouter()
    const [bedrooms, setBedrooms] = useState([])

    useEffect(() => {
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
                <Grid
                    w="100%"
                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    gap={2}
                    my="10px"
                    px="10px"
                >
                    {
                        bedrooms.map((bedroom: Bedroom) => {
                            return (
                                <>
                                    <Center py={6}>
                                        <Stack
                                            borderWidth="1px"
                                            borderRadius="lg"
                                            w={{ sm: '100%', md: '540px' }}
                                            height={{ sm: '476px', md: '20rem' }}
                                            direction={{ base: 'column', md: 'row' }}
                                            bg={useColorModeValue('white', 'gray.900')}
                                            boxShadow={'2xl'}
                                            padding={4}>
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
                                                pt={2}>
                                                <Heading fontSize={'2xl'} fontFamily={'body'}>
                                                    {bedroom.bedroomName}
                                                </Heading>
                                                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                                    {bedroom.price}€
                                                </Text>
                                                <Text
                                                    textAlign={'center'}
                                                    color={useColorModeValue('gray.700', 'gray.400')}
                                                    px={3}>
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
                                                    alignItems={'center'}>
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
                </Grid>
            </Center>
        </>
    )
}

