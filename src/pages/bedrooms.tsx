import type { NextPage } from 'next'
import React from 'react'
import { BedroomFilter } from '../components/bedroomFilter/bedroomFilter'
import { Cards } from '../components/cards/cards'

const Bedrooms: NextPage = () => {
    return (
        <>
            <BedroomFilter />
            <Cards />
        </>
    )
}

export default Bedrooms