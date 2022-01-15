import { Box, Button, Divider, Flex, FormControl, FormLabel, HStack, IconButton, Image, Input, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RiDeleteBin5Line, RiDeleteBack2Fill } from "react-icons/ri"
import { MdDriveFileRenameOutline } from "react-icons/md"
import { api } from "../../services/api"
import { useForm } from "react-hook-form"
import { Sidebar } from "../sidebar/sidebar"
import { useRouter } from "next/router"


export function BedroomsDashboard() {

    const [bedrooms, setBedrooms] = useState<any>([])

    useEffect(() => {
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
                        bedrooms.map((bedroom: any) => {
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
                                                    await api.delete(`/bedrooms/bedroom/${bedroom._id}`)
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