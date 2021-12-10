import { Box, Center, Text, Divider, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const HomePage: NextPage = () => {
    return (
        <>
            <Box
                bgImage="url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                w="100%"
                h="calc(100vh - 124px)"
                bgRepeat="no-repeat"
                objectFit="cover"
                bgSize="cover"
                bgPosition="center"
            >
                <Center>
                    <Text color="#fff" fontSize="24px" mt="100px">THE BEST HOTEL IN THE WORLD</Text>
                </Center>
                <Center>
                    <Divider
                        w="100px"
                        borderWidth="1px"
                        borderColor="#fff"
                        mt="100px"
                    />
                </Center>
                <Center>
                    <Text fontSize="72px" color="#fff" mt="100px">PELOURINHO HOTEL & SPA</Text>
                </Center>
                <Center>
                    <Link href="/" passHref>
                        <Box
                            as="button"
                            border="4px"
                            w="674px"
                            h="100px"
                            fontSize="20px"
                            color="#fff"
                            mt="180px"
                            outline="none"
                            _hover={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                            transition="0.25s"
                        >
                            Explore Bedrooms
                        </Box>
                    </Link>
                </Center>
            </Box>
        </>
    )
}

export default HomePage