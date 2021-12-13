import {
    Box,
    Grid,
    Image,
    Text,
    Flex,
    Button,
    Center
} from '@chakra-ui/react'
import React from 'react'

export function Cards() {

    const bedroom = {
        title: "Quarto duplo",
        description: "lorem ipsum dolor sit amet con la port lorem ipsum dolor sit amet con la port",
        price: 50,
        imageURL: "https://bit.ly/2Z4KKcF",
        imageALT: "image",
        capacity: 2,
        bedroomType: "Double",
    }

    return (
        <>
            <Center>
                <Flex w="100%" maxW="1100px" px="10px" h="50px" fontSize="24px" align="end" fontWeight="bold">
                    Quartos:
                </Flex>
            </Center>
            <Center>
                <Grid w="100%" maxW="1100px" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} my="10px" px="10px">
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light" _hover={{ bgColor: "rgba(0, 0, 0, 0.2)" }}>Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box maxW='sm' borderRadius='8px 8px 0 0' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" mx="auto">
                        <Image src={bedroom.imageURL} alt={bedroom.imageURL} />
                        <Box p='2' bgColor="#F5F5F5">
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                >
                                    teste beds &bull; teste baths
                                </Box>
                            </Box>
                            <Flex
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                justify="space-between"
                            >
                                {bedroom.title}
                                <Text>{bedroom.price}€</Text>
                            </Flex>
                            <Flex alignItems='flex-end' justify="space-between">
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    <Text pr="10px" color='gray.500' fontSize='sm' noOfLines={3} maxW="200px" w="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos rem minus repellendus corrupti aliquid nemo nulla placeat repudiandae alias hic harum, sed mollitia in esse quaerat molestiae adipisci aut.</Text>
                                </Box>
                                <Button bgColor="#C29A76" fontWeight="light">Ver mais</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Grid>
            </Center>
        </>
    )
}