import { Center, HStack, Select, Text } from '@chakra-ui/react'

export function BedroomFilter() {
    return (
        <>
            <Center>
                <HStack spacing='24px' h="90" borderTop="1px" boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" w="100%">
                    <Text ml="24px" display={["none", "block"]}>Filtrar por:</Text>
                    <Select variant="outline" w="150px" placeholder="Preço" borderRadius="0" borderColor="#000">
                        <option value="ascending">Ascendente</option>
                        <option value="descending">Descendente</option>
                    </Select>
                    <Select variant="outline" w="150px" placeholder="Nome" borderRadius="0" borderColor="#000">
                        <option value="ascending">Ascendente</option>
                        <option value="descending">Descendente</option>
                    </Select>
                </HStack>
            </Center>
        </>
    )
}