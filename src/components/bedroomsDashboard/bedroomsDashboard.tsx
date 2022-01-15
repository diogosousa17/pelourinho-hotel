import {
    Box,
    Divider,
    Flex,
    HStack,
    IconButton,
    Image,
    Text,
    VStack
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RiDeleteBin5Line } from "react-icons/ri"
import { api } from "../../services/api"
import { Sidebar } from "../sidebar/sidebar"

export function BedroomsDashboard() {

    const [bedrooms, setBedrooms] = useState<any>([])

    useEffect(() => { // Get from API all the bedrooms then saving it on a state
        api.get("/bedrooms/bedroom", {
        })
            .then((response) =>
                setBedrooms(response.data)
            )
            .catch((err) => {
                console.error("Erro: " + err)
            })
    }, [bedrooms])

    return (
        <>
            <Flex>
                <Sidebar />
                <Box overflowY="scroll" h="calc(100vh - 124px)" w="1648px">
                    {
                        bedrooms.map((bedroom: any) => { // map from the state to print all the bedrooms separately
                            return (
                                <>
                                    <HStack spacing={10} mt="10px">
                                        <Image
                                            src={bedroom.imageURL}
                                            w="120px"
                                            h="120px"
                                            borderRadius="8px"
                                            objectFit="cover"
                                        />
                                        <Text fontSize="lg" fontWeight="bold">{bedroom.bedroomNumber}</Text>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">NAME</Text>
                                            <Text>{bedroom.bedroomName}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">TYPE</Text>
                                            <Text>{bedroom.bedroomType}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">BEDS</Text>
                                            <Text>{bedroom.bedsNumber}</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">CAPACITY</Text>
                                            <Text>{bedroom.capacity} People</Text>
                                        </VStack>
                                        <VStack align="flex-start">
                                            <Text fontWeight="medium">PRICE</Text>
                                            <Text>{bedroom.price}€</Text>
                                        </VStack>
                                        <HStack>
                                            <IconButton
                                                aria-label='Delete Bedroom'
                                                icon={<RiDeleteBin5Line />}
                                                onClick={async () => {
                                                    await api.delete(`/bedrooms/bedroom/${bedroom._id}`) // Delete the bedroom we want
                                                        .then(res => {
                                                            const find = bedrooms.findIndex((bed: any) => bed._id = bedroom._id)
                                                            bedrooms.splice(find, 1)
                                                            setBedrooms(bedrooms)
                                                        })
                                                }}
                                            />
                                        </HStack>
                                    </HStack>
                                    <Divider />
                                </>
                            )
                        })
                    }
                </Box>
            </Flex>
        </>
    )
}