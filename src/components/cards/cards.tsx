import {
    Box,
    Grid,
    Image,
    Text,
    Flex,
    Center
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from "react"
import { api } from '../../services/api'
import ReactPaginate from 'react-paginate'
import { GetServerSideProps } from 'next'

type Bedroom = {
    _id: string,
    bedroomName: string,
    description: string,
    capacity: Number,
    bedsNumber: Number,
    price: Number
}

export function Cards({ filter }: any) {

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
                    maxW="1100px"
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    gap={6}
                    my="10px"
                    px="10px"
                >
                    {
                        bedrooms.map((bedroom: Bedroom) => {
                            return (
                                <Box
                                    maxW='sm'
                                    borderRadius='8px 8px 0 0'
                                    overflow='hidden'
                                    boxShadow="
                                        rgba(0, 0, 0, 0.12) 0px 1px 3px, 
                                        rgba(0, 0, 0, 0.24) 0px 1px 2px;"
                                    mx="auto"
                                    key={bedroom._id}
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="image"
                                        maxH="300px"
                                        h="100%"
                                        w="100%"
                                        objectFit="cover"
                                    />
                                    <Box
                                        p='2'
                                        bgColor="#F5F5F5"
                                        h="100%"
                                    >
                                        <Box display='flex' alignItems='baseline'>
                                            <Box
                                                color='gray.500'
                                                fontWeight='semibold'
                                                fontSize='xs'
                                                textTransform='uppercase'
                                            >
                                                {bedroom.capacity} pessoa(s) &bull; {bedroom.bedsNumber} camas
                                            </Box>
                                        </Box>
                                        <Flex
                                            fontWeight='semibold'
                                            as='h4'
                                            lineHeight='tight'
                                            isTruncated
                                            justify="space-between"
                                        >
                                            {bedroom.bedroomName}
                                            <Text>{bedroom.price}€</Text>
                                        </Flex>
                                        <Flex justify="space-between" h="65px">
                                            <Box
                                                as='span'
                                                color='gray.600'
                                                fontSize='sm'
                                            >
                                                <Text
                                                    pr="10px"
                                                    color='gray.500'
                                                    fontSize='sm'
                                                    noOfLines={3}
                                                    maxW="200px"
                                                    w="100%"
                                                >
                                                    {bedroom.description}
                                                </Text>
                                            </Box>
                                            <Link href={"/bedroom/" + bedroom._id} passHref>
                                                <Box
                                                    as="button"
                                                    bgColor="#C29A76"
                                                    fontWeight="light"
                                                    _hover={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                                                    w="100px"
                                                    h="30px"
                                                    borderRadius="4px"
                                                    alignSelf='flex-end'
                                                >
                                                    Ver mais
                                                </Box>
                                            </Link>
                                        </Flex>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Center>
        </>
    )
}

