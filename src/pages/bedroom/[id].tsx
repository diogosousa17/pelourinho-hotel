import {
    Image,
    Box,
    Flex,
    Text,
    SimpleGrid,
    Button,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    useDisclosure,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useToast,
    Container,
    Stack,
    Heading,
    useColorModeValue,
    StackDivider,
    VStack,
    List
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { useContext, useState } from "react"
import { AuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { differenceInDays, format } from 'date-fns'
import { useRouter } from "next/router"

const Bedroom: NextPage = ({ data }: any) => {

    const toast = useToast()
    const router = useRouter()
    const { bedroomName, price, capacity, bedsNumber, characteristics, description, bedroomNumber, bedroomType, imageURL } = data // Info of the bedroom from props
    const { register, handleSubmit, formState: { isSubmitting } } = useForm() // React Hook Forms
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, isAuthnticated } = useContext(AuthContext)
    const [dateFrom, setDateFrom] = useState<any>(new Date()) // Here we keep the dateFrom on state
    const [dateTo, setDateTo] = useState<any>(new Date()) // Here we keep the dateTo on state

    const dateFromTest = new Date(dateFrom)
    const dateToTest = new Date(dateTo)

    const difference = (differenceInDays(dateToTest, dateFromTest)) // This is to know how many days the user is booking
    const priceFinal = price * difference // Math to calculate the final price

    const disablePastDate = () => { // Disable the dates that already been passed
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0")
        const mm = String(today.getMonth() + 1).padStart(2, "0")
        const yyyy = today.getFullYear()
        return yyyy + "-" + mm + "-" + dd;
    };

    const onSubmit = async (data: any) => { // Post to API to make a new reservation
        const createReserve = {
            bedroomNumber: data.bedroomNumber,
            bedroomType: data.bedroomType,
            nightsNumber: difference,
            from: data.from,
            to: data.to,
            guestsNumber: data.guestsNumber,
            finalPrice: priceFinal
        }
        if (priceFinal <= 0) { // If the price is 0 or below 0 we give a warning
            toast({
                position: 'top-start',
                isClosable: true,
                title: 'Price equal or below 0,',
                status: 'warning',
                description: 'Pelase choose another date.'
            })
        } else {
            await api.put(`/auth/user/${user.id}`, createReserve) // Put to the user schema to add a new reservation
                .then(res => {
                    console.log(res)
                    toast({
                        position: 'top-start',
                        isClosable: true,
                        title: 'Reservation made successfully!',
                        status: 'success',
                    })
                })
                .catch(err => {
                    toast({
                        position: 'top-start',
                        isClosable: true,
                        title: 'Error Bokking,',
                        status: 'error',
                        description: 'Pelase try again later.'
                    })
                })
        }
    }

    return (
        <>
            <>
                <Container maxW={'7xl'}>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 18, md: 24 }}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'product image'}
                                src={imageURL}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={{ base: '100%', sm: '400px', lg: '500px' }}
                            />
                        </Flex>
                        <Stack spacing={{ base: 6, md: 10 }}>
                            <Box as={'header'}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                >
                                    {bedroomName}
                                </Heading>
                                <Text
                                    color={useColorModeValue('gray.900', 'gray.400')}
                                    fontWeight={300}
                                    fontSize={'2xl'}>
                                    {price}€/night
                                </Text>
                            </Box>

                            <Stack
                                spacing={{ base: 4, sm: 6 }}
                                direction={'column'}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                                    />
                                }>
                                <VStack spacing={{ base: 4, sm: 6 }}>
                                    <Text fontSize={'lg'}>
                                        {description}
                                    </Text>
                                </VStack>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={useColorModeValue('yellow.500', 'yellow.300')}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        characteristics
                                    </Text>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                        <List spacing={2}>
                                            {
                                                characteristics.slice(0, 4).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                            }
                                        </List>
                                        <List spacing={2}>
                                            {
                                                characteristics.slice(4, 7).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                            }
                                        </List>
                                    </SimpleGrid>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={useColorModeValue('yellow.500', 'yellow.300')}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        Bedroom Details
                                    </Text>

                                    <List spacing={2}>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Bedroom Type:
                                            </Text>{' '}
                                            {bedroomType}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Capacity:
                                            </Text>{' '}
                                            {capacity} people
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Beds Number:
                                            </Text>{' '}
                                            {bedsNumber}
                                        </ListItem>
                                    </List>
                                </Box>
                            </Stack>
                            {
                                isAuthnticated ? (
                                    <Button
                                        rounded={'none'}
                                        w={'full'}
                                        mt={8}
                                        size={'lg'}
                                        py={'7'}
                                        bg={'#C29A76'}
                                        color={useColorModeValue('white', 'gray.900')}
                                        textTransform={'uppercase'}
                                        _hover={{
                                            transform: 'translateY(2px)',
                                            boxShadow: 'lg',
                                        }}
                                        onClick={onOpen}
                                    >
                                        book now
                                    </Button>
                                ) : (
                                    <Button
                                        rounded={'none'}
                                        w={'full'}
                                        mt={8}
                                        size={'lg'}
                                        py={'7'}
                                        bg={'#C29A76'}
                                        color={useColorModeValue('white', 'gray.900')}
                                        textTransform={'uppercase'}
                                        _hover={{
                                            transform: 'translateY(2px)',
                                            boxShadow: 'lg',
                                        }}
                                        onClick={() => {
                                            toast({
                                                position: 'top-start',
                                                isClosable: true,
                                                title: 'Please Login First!',
                                                status: 'warning',
                                            })
                                        }}
                                    >
                                        book now
                                    </Button>
                                )
                            }
                        </Stack>
                    </SimpleGrid>
                </Container>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>BOOK ROOM</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl>
                                    <FormLabel>Bedroom Number</FormLabel>
                                    <Input
                                        value={bedroomNumber}
                                        {...register("bedroomNumber")}
                                    />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Bedroom Type</FormLabel>
                                    <Input
                                        value={bedroomType}
                                        {...register("bedroomType")}
                                    />
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>From</FormLabel>
                                    <Input
                                        min={disablePastDate()}
                                        type="date"
                                        {...register("from")}
                                        onChange={(e) => { setDateFrom(e.target.value) }}
                                        defaultValue={format(dateFromTest, 'yyyy-MM-dd')}
                                    />
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>To</FormLabel>
                                    <Input
                                        min={disablePastDate()}
                                        type="date"
                                        {...register("to")}
                                        onChange={(e) => { setDateTo(e.target.value) }}
                                        defaultValue={format(dateToTest, 'yyyy-MM-dd')}
                                    />
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>Number of People</FormLabel>
                                    <NumberInput
                                        defaultValue={1}
                                        min={1}
                                        max={capacity}
                                        isRequired
                                    >
                                        <NumberInputField
                                            {...register("guestsNumber")}
                                        />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>Number of Nights</FormLabel>
                                    <NumberInput
                                        min={1}
                                        isRequired
                                        defaultValue=""
                                        value={difference}
                                    >
                                        <NumberInputField
                                            {...register("nightsNumber")}
                                        />
                                    </NumberInput>
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Final Price</FormLabel>
                                    <Input
                                        type="number"
                                        {...register("priceFinal")}
                                        value={priceFinal}
                                    />
                                </FormControl>
                                <Button colorScheme='#C29A76' mr={3} type="submit" isLoading={isSubmitting} mt="10px" bg={"#C29A76"} borderRadius={"0"}>
                                    BOOK
                                </Button>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} borderRadius={"0"}>CANCEL</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    // Fetch the info of one bedroom
    const { id }: any = params
    const res = await fetch(`http://localhost:3333/bedrooms/bedroom/${id}`)
    const data = await res.json()

    return {
        props: {
            data
        },
    }
}

export default Bedroom