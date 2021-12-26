import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from "react"
import { Image, Box, Center, Flex, Text, Divider, UnorderedList, SimpleGrid, Button, ListItem, useBreakpointValue, Grid } from '@chakra-ui/react'
import { api } from '../../services/api'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Cards } from '../../components/cards/cards'


const Bedroom: NextPage = ({ data }: any) => {

    const { bedroomName, price, capacity, bedsNumber, characteristics, description } = data

    const wide = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <>
            {
                !wide ? (
                    <div>responsive</div>
                ) : (
                    <>
                        <Center mt="40px" mx="10px" mb="15px">
                            <SimpleGrid columns={2} spacing={5} w="100%" maxW="1100px">
                                <Box h="100%">
                                    <Image src="/logo.png" alt="bedroomImage" h="100%" maxH="500px" w="100%" />
                                </Box>
                                <SimpleGrid>
                                    <Box>
                                        <Flex justify="space-between" w="100%" align="flex-start">
                                            <Text fontSize="40px" fontWeight="medium">{bedroomName}</Text>
                                            <Flex align="flex-end">
                                                <Text fontSize="40px" fontWeight="medium">{price}€</Text>
                                                <Text fontSize="13px">/noite</Text>
                                            </Flex>
                                        </Flex>
                                        <Flex>
                                            <Text textAlign="left" w="100%" fontSize="14px" color="#888888">{capacity} pessoas &bull; {bedsNumber} camas</Text>
                                        </Flex>
                                    </Box>
                                    <Text textAlign="justify" w="100%">{description}</Text>
                                    <Center h="1px">
                                        <Divider borderWidth="0.5px" borderColor="#000" w="100px" />
                                    </Center>
                                    <Text textAlign="left" w="100%" fontWeight="semibold" h="100%">O quarto conta com as seguintes comodidades:</Text>
                                    <SimpleGrid columns={2} w="100%" h="100%">
                                        <UnorderedList>
                                        {
                                            characteristics.slice(0,4).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                        }
                                        </UnorderedList>
                                        <UnorderedList dir="rtl">
                                        {
                                            characteristics.slice(4,7).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                        }
                                        </UnorderedList>
                                    </SimpleGrid>
                                    <Flex align="flex-end">
                                        <Button
                                            bgColor="#C29A76"
                                            w="100%"
                                            maxH="50px"
                                            h="100%"
                                            mt="50px"
                                            borderRadius="0"
                                        >
                                            RESERVAR
                                        </Button>
                                    </Flex>
                                </SimpleGrid>
                            </SimpleGrid>
                        </Center>
                        <Center>
                            <Divider borderWidth="0,5px" w="1000px" mb="5px" borderColor="#000" />
                        </Center>
                        <Cards />
                    </>
                )
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id }: any = params
    const res = await fetch(`http://localhost:3333/bedrooms/bedroom/${id}`)
    const data = await res.json()

    return {
        props: {
            data
        },
    }
}

export default Bedroom