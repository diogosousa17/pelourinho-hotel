import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export function Cards() {

    const bedroom = {
        title: "Quarto duplo",
        description: "lorem ipsum dolor sit amet con la port lorem ipsum dolor sit amet con la port",
        price: 50,
        imageURL: "https://bit.ly/2Z4KKcF",
        imageALT: "image"
    }

    return (
        <Box h="380px" bgColor="#F5F5F5" overflow='hidden' maxW='sm' m="10">
            <Image src={bedroom.imageURL} alt={bedroom.imageALT} />
            <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                pl='6'
            >
                1 beds &bull; 1 baths
            </Box>
            <Flex justify="space-between">

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    pl='6'
                >
                    {bedroom.title}
                </Box>
                <Text>50€</Text>
            </Flex>
            <Text pl='6'>
                {bedroom.description}
            </Text>
        </Box>
    )
}