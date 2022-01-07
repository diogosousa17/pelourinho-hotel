import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import { BiSort } from 'react-icons/bi'
import { RiFilterFill, RiFilterOffFill } from 'react-icons/ri'

export function BedroomFilter({ filter }: any) {

    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    function deleteFilters() {
        router.push('/bedrooms')
    }

    function orderByPrice(e: any) {

        let queryValue

        if (e.target.value == 'asc') {
            queryValue = 'orderBy=price&direction=asc'
        } else if (e.target.value == 'desc') {
            queryValue = 'orderBy=price&direction=desc'
        }
        router.push({
            pathname: '/bedrooms',
            query: queryValue
        })
    }

    function orderByName(e: any) {
        let queryValue

        if (e.target.value == 'asc') {
            queryValue = 'orderBy=bedroomName&direction=asc'
        } else if (e.target.value == 'desc') {
            queryValue = 'orderBy=bedroomName&direction=desc'
        }
        router.push({
            pathname: '/bedrooms',
            query: queryValue
        })
    }

    function orderByBeds(e: any) {
        let queryValue

        if (e.target.value == 'asc') {
            queryValue = 'orderBy=bedsNumber&direction=asc'
        } else if (e.target.value == 'desc') {
            queryValue = 'orderBy=bedsNumber&direction=desc'
        }
        router.push({
            pathname: '/bedrooms',
            query: queryValue
        })
    }

    function orderByPeople(e: any) {
        let queryValue

        if (e.target.value == 'asc') {
            queryValue = 'orderBy=capacity&direction=asc'
        } else if (e.target.value == 'desc') {
            queryValue = 'orderBy=capacity&direction=desc'
        }

        router.push({
            pathname: '/bedrooms',
            query: queryValue
        })
    }

    const wide = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <>
            {
                wide ? (
                    <Center>
                        <HStack spacing='4' h="90" borderTop="1px" boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" w="100%">
                            <Text ml="24px" >Order by:</Text>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                                    Price
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={orderByPrice} value="asc">Ascending</MenuItem>
                                    <MenuItem onClick={orderByPrice} value="desc">Descending</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                                    Name
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={orderByName} value="asc">Ascending</MenuItem>
                                    <MenuItem onClick={orderByName} value="desc">Descending</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                                    Beds Number
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={orderByBeds} value="asc">Ascending</MenuItem>
                                    <MenuItem onClick={orderByBeds} value="desc">Descending</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                                    Capacity
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={orderByPeople} value="asc">Ascending</MenuItem>
                                    <MenuItem onClick={orderByPeople} value="desc">Descending</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button onClick={deleteFilters} borderRadius={"0"} bg="#C29A76" colorScheme={"#C29A76"}><RiFilterOffFill /></Button>
                        </HStack>
                    </Center>
                ) : (
                    <>
                        <IconButton
                            onClick={onOpen}
                            aria-label="sort"
                            mx="5px"
                            my="5px"
                            borderRadius={"0"}
                            bg="#C29A76"
                            colorScheme={"#C29A76"}
                        >
                            <RiFilterFill />
                        </IconButton>
                        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'>Ordernar por:</DrawerHeader>
                                <DrawerCloseButton />
                                <DrawerBody>
                                    <Center>
                                        <VStack w="100%">
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light" w="100%" maxW="150px">
                                                    Preço
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={orderByPrice} value="asc">Ascendente</MenuItem>
                                                    <MenuItem onClick={orderByPrice} value="desc">Descendente</MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light" w="100%" maxW="150px">
                                                    Nome
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={orderByName} value="asc">Ascendente</MenuItem>
                                                    <MenuItem onClick={orderByName} value="desc">Descendente</MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light" w="100%" maxW="150px">
                                                    Nrº Camas
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={orderByBeds} value="asc">Ascendente</MenuItem>
                                                    <MenuItem onClick={orderByBeds} value="desc">Descendente</MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light" w="100%" maxW="150px">
                                                    Nrº Pessoas
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={orderByPeople} value="asc">Ascendente</MenuItem>
                                                    <MenuItem onClick={orderByPeople} value="desc">Descendente</MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Button onClick={deleteFilters} w="100%" maxW="150px" borderRadius={"0"} bg="#C29A76" colorScheme={"#C29A76"}><RiFilterOffFill /></Button>
                                        </VStack>
                                    </Center>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </>
                )
            }
        </>
    )
}