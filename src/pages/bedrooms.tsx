import { Center, Flex } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { BedroomFilter } from '../components/bedroomFilter/bedroomFilter'
import { Cards } from '../components/cards/cards'
import { PaginationComp } from '../components/paginationComp/paginationComp'

const Bedrooms: NextPage = ({ query }: any) => {

    return (
        <>
            <BedroomFilter filter={query} />
            <Center>
                <Flex
                    w="100%"
                    fontSize="24px"
                    align="end"
                    fontWeight="bold"
                    mx="10"
                >
                    Quartos:
                </Flex>
            </Center>
            <Cards filter={query} />
            <PaginationComp page={query} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            query
        },
    }
}

export default Bedrooms