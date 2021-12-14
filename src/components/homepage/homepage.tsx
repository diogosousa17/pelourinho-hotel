import { Box, VStack, Text, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export function HomePage() {
    return (
        <>
            <Box
                bgImage="url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                w="100%"
                h={["calc(100vh - 70px)", "calc(100vh - 70px)", "calc(100vh - 70px)", "calc(100vh - 124px)"]}
                bgRepeat="no-repeat"
                objectFit="cover"
                bgSize="cover"
                bgPosition="center"
            >
                <VStack justify="space-between" h="100%" py="28" px="16px">
                    <Text color="#fff" fontSize="24px" textAlign="center">THE BEST HOTEL IN THE WORLD</Text>
                    <Divider
                        w="100px"
                        borderWidth="1px"
                        borderColor="#fff"
                    />
                    <Heading
                        fontSize={["40px", "72px"]}
                        color="#fff" textAlign="center"
                        fontWeight="regular"
                        textShadow="3px 0px 7px rgba(0,0,0,0.3), 
	                                -3px 0px 7px rgba(0,0,0,0.3), 
	                                0px 4px 7px rgba(0,0,0,0.3)"
                    >
                        PELOURINHO HOTEL & SPA</Heading>
                    <Link href="/" passHref>
                        <Box
                            as="button"
                            border="4px"
                            w="100%"
                            maxW="674px"
                            h="100px"
                            fontSize="20px"
                            color="#fff"
                            outline="none"
                            _hover={{ bgColor: "rgba(0, 0, 0, 0.2)" }}
                            transition="0.25s"
                        >
                            Explore Bedrooms
                        </Box>
                    </Link>
                </VStack>
            </Box>
        </>
    )
}
