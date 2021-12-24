import { Button, Center, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'

export function BedroomFilter({ filter }: any) {

    const router = useRouter()

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

    return (
        <>
            <Center>
                <HStack spacing='4' h="90" borderTop="1px" boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" w="100%">
                    <Text ml="24px" >Filtrar por:</Text>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                            Preço
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={orderByPrice} value="asc">Ascendente</MenuItem>
                            <MenuItem onClick={orderByPrice} value="desc">Descendente</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                            Nome
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={orderByName} value="asc">Ascendente</MenuItem>
                            <MenuItem onClick={orderByName} value="desc">Descendente</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                            Nrº Camas
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={orderByBeds} value="asc">Ascendente</MenuItem>
                            <MenuItem onClick={orderByBeds} value="desc">Descendente</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiChevronDown />} borderRadius="0" border="1px" bgColor="#FFF" fontWeight="light">
                            Nrº Pessoas
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={orderByPeople} value="asc">Ascendente</MenuItem>
                            <MenuItem onClick={orderByPeople} value="desc">Descendente</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button onClick={deleteFilters}>Remover filtros</Button>
                </HStack>
            </Center>
        </>
    )
}