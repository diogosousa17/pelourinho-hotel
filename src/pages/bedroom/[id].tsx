import type { NextPage } from 'next'
import React, { useEffect, useState } from "react"
import { Image, Box, Center, Flex, Text, Divider, UnorderedList, SimpleGrid, Button, ListItem, useBreakpointValue } from '@chakra-ui/react'
import { api } from '../../services/api'
import { useRouter } from 'next/router'


const Bedroom: NextPage = () => {

    const router = useRouter()
    const [bedroom, setBedroom] = useState([])
    const { id } = router.query

    useEffect(() => {
        api.get(`/bedrooms/bedroom/${id}`)
            .then((response) => {
                setBedroom(response.data)
            })
    }, [])

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
                    <Center mt="40px" mx="10px">
                        <SimpleGrid columns={2} spacing={5} w="100%" maxW="1100px">
                            <Box h="100%">
                                <Image src="/logo.png" alt="bedroomImage" h="100%" maxH="500px" w="100%" />
                            </Box>
                            <SimpleGrid>
                                <Box>
                                    <Flex justify="space-between" w="100%" align="flex-start">
                                        <Text fontSize="40px" fontWeight="medium">Quarto duplo</Text>
                                        <Flex align="flex-end">
                                            <Text fontSize="40px" fontWeight="medium">50€</Text>
                                            <Text fontSize="13px">/noite</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex>
                                        <Text textAlign="left" w="100%" fontSize="14px" color="#888888">2 pessoas &bull; 2 camas</Text>
                                    </Flex>
                                </Box>
                                <Text textAlign="justify" w="100%">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur voluptatem nam, hic ut dignissimos id in! Architecto quos nemo alias fuga, ducimus magnam dolor id illo assumenda nam perspiciatis.</Text>
                                <Center h="1px">
                                    <Divider borderWidth="1px" borderColor="#000" w="100px" />
                                </Center>
                                <Text textAlign="left" w="100%" fontWeight="semibold" h="100%">O quarto conta com as seguintes comodidades:</Text>
                                <SimpleGrid columns={2} w="100%" h="100%">
                                    <UnorderedList>
                                        <ListItem>Wi-Fi</ListItem>
                                        <ListItem>Varanda</ListItem>
                                        <ListItem>Aquecimento Central</ListItem>
                                        <ListItem>Tábua de passar a ferro</ListItem>
                                    </UnorderedList>
                                    <UnorderedList dir="rtl">
                                        <ListItem>Ar Condicionado</ListItem>
                                        <ListItem>Casa de Banho com Chuveiro</ListItem>
                                        <ListItem>Vista Para o Mar</ListItem>
                                        <ListItem>Jacuzzi</ListItem>
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
                                        BOOK NOW
                                    </Button>
                                </Flex>
                            </SimpleGrid>
                        </SimpleGrid>
                    </Center>
                )
            }
        </>
    )
}

export default Bedroom