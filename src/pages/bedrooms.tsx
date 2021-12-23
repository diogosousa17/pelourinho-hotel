import { Center, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { BedroomFilter } from '../components/bedroomFilter/bedroomFilter'
import { Cards } from '../components/cards/cards'

const Bedrooms: NextPage = () => {
    return (
        <>
            <BedroomFilter />
            <Center>
                <Flex
                    w="100%"
                    maxW="1100px"
                    h="50px"
                    fontSize="24px"
                    align="end"
                    fontWeight="bold"
                >
                    Quartos:
                </Flex>
            </Center>
            <Cards />
        </>
    )
}

export default Bedrooms