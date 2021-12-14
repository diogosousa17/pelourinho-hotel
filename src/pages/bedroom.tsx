import type { NextPage } from 'next'
import React, { useEffect, useState } from "react"
import { Image, Box, Center, Flex, Text, Divider, UnorderedList, ListItem } from '@chakra-ui/react'


const Bedroom: NextPage = () => {

    

    return (
        <>
            <Center>
                <Flex w="100%" maxW="1100px" h="300px">
                    <Image src="https://bit.ly/2Z4KKcF" w="300px" h="300px" alt="bedroomImage" objectFit="cover" />
                    <Box w="100%">
                        <Center>
                            <Flex justify="space-between" h="100px" w="100%" align="start" px="50px" fontWeight="bold">
                                <Text fontSize="42px">Quarto duplo</Text>
                                <Text fontSize="42px">50€</Text>
                            </Flex>
                        </Center>
                        <Center>
                            <Box h="130px" w="100%" px="50px">
                                <Text textAlign="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vel. Illo ipsa illum fuga vero quas quibusdam laboriosam laudantium enim, magnam porro amet dolorem explicabo totam magni eum. Dolorem, accusamus.</Text>
                            </Box>
                        </Center>
                        <Center>
                            <Box as="button" w="700px" h="70px" bgColor="#C29A76">
                                BOOK NOW
                            </Box>
                        </Center>
                    </Box>
                </Flex>
            </Center>
            <Center>
                <Divider maxW="700px" w="100%" borderColor="#000" mt="24px" mb="24px" />
            </Center>
            <Center>
                <Flex maxW="1100px" w="100%" justify="space-between" pr="52px">
                    <Box>
                        <Text fontSize="22px" fontWeight="bold">Características</Text>
                        <UnorderedList ml="20px">
                            <ListItem>Wi-Fi</ListItem>
                            <ListItem>Casa de Banho</ListItem>
                            <ListItem>Varanda</ListItem>
                            <ListItem>Beliche opcional</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Text fontSize="22px" fontWeight="bold">Características</Text>
                        <UnorderedList mr="20px" textAlign="right" dir="rtl">
                            <ListItem>Wi-Fi</ListItem>
                            <ListItem>Casa de Banho</ListItem>
                            <ListItem>Varanda</ListItem>
                            <ListItem>Beliche opcional</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Center>
        </>
    )
}

export default Bedroom