import {
    Image,
    Box,
    Center,
    Flex,
    Text,
    Divider,
    UnorderedList,
    SimpleGrid,
    Button,
    ListItem,
    useBreakpointValue,
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
    useToast
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { useContext, useState } from "react"
import { Cards } from '../../components/cards/cards'
import { AuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { differenceInDays, format } from 'date-fns'

const Bedroom: NextPage = ({ data }: any) => {

    const toast = useToast()
    const { bedroomName, price, capacity, bedsNumber, characteristics, description, bedroomNumber, bedroomType } = data
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)
    const [dateFrom, setDateFrom] = useState<any>(new Date())
    const [dateTo, setDateTo] = useState<any>(new Date())

    const dateFromTest = new Date(dateFrom)
    const dateToTest = new Date(dateTo)

    const difference = (differenceInDays(dateToTest, dateFromTest))
    const priceFinal = price * difference


    const wide = useBreakpointValue({
        base: false,
        lg: true
    })

    const onSubmit = async (data: any) => {
        const createReserve = {
            bedroomNumber: data.bedroomNumber,
            bedroomType: data.bedroomType,
            nightsNumber: difference,
            from: data.from,
            to: data.to,
            guestsNumber: data.guestsNumber,
            finalPrice: priceFinal
        }
        await api.put(`/auth/user/${user.id}`, createReserve)
            .then(res => {
                console.log(res)
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Dados alterados com sucesso!',
                    status: 'success',
                })
            })
            .catch(err => {
                toast({
                    position: 'top-start',
                    isClosable: true,
                    title: 'Erro ao alterar dados. Tente novamente mais tarde.',
                    status: 'error',
                })
            })
    }

    return (
        <>
            {
                !wide ? (
                    <div>responsive</div>
                ) : (
                    <>
                        <Center mt="40px" mx="10px" mb="15px">
                            <SimpleGrid columns={2} spacing={5} w="100%" maxW="1100px">
                                <Box h="100%">
                                    <Image src="/logo.png" alt="bedroomImage" h="100%" maxH="500px" w="100%" />
                                </Box>
                                <SimpleGrid>
                                    <Box>
                                        <Flex justify="space-between" w="100%" align="flex-start">
                                            <Text fontSize="40px" fontWeight="medium">{bedroomName}</Text>
                                            <Flex align="flex-end">
                                                <Text fontSize="40px" fontWeight="medium">{price}€</Text>
                                                <Text fontSize="13px">/noite</Text>
                                            </Flex>
                                        </Flex>
                                        <Flex>
                                            <Text textAlign="left" w="100%" fontSize="14px" color="#888888">{capacity} pessoas &bull; {bedsNumber} camas</Text>
                                        </Flex>
                                    </Box>
                                    <Text textAlign="justify" w="100%">{description}</Text>
                                    <Center h="1px">
                                        <Divider borderWidth="0.5px" borderColor="#000" w="100px" />
                                    </Center>
                                    <Text textAlign="left" w="100%" fontWeight="semibold" h="100%">O quarto conta com as seguintes comodidades:</Text>
                                    <SimpleGrid columns={2} w="100%" h="100%">
                                        <UnorderedList>
                                            {
                                                characteristics.slice(0, 4).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                            }
                                        </UnorderedList>
                                        <UnorderedList dir="rtl">
                                            {
                                                characteristics.slice(4, 7).map((characteristic: string) => <ListItem key={characteristic}>{characteristic}</ListItem>)
                                            }
                                        </UnorderedList>
                                    </SimpleGrid>
                                    <Flex align="flex-end">
                                        <Button
                                            bgColor="#C29A76"
                                            w="100%"
                                            maxH="50px"
                                            h="100%"
                                            mt="50px"
                                            borderRadius="0"
                                            onClick={onOpen}
                                        >
                                            RESERVAR
                                        </Button>
                                    </Flex>
                                </SimpleGrid>
                            </SimpleGrid>
                        </Center>
                        <Center>
                            <Divider borderWidth="0,5px" w="1000px" mb="5px" borderColor="#000" />
                        </Center>
                        <Flex w="930px" justify="center">
                            <Text fontSize="24px" fontWeight="bold"> Sugestões:</Text>
                        </Flex>
                        <Cards />
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            isCentered
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Reservar Quarto</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl>
                                            <FormLabel>Número do Quarto</FormLabel>
                                            <Input
                                                value={bedroomNumber}
                                                {...register("bedroomNumber")}
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Tipo de Quarto</FormLabel>
                                            <Input
                                                value={bedroomType}
                                                {...register("bedroomType")}
                                            />
                                        </FormControl>
                                        <FormControl mt={4} isRequired>
                                            <FormLabel>De</FormLabel>
                                            <Input
                                                type="date"
                                                {...register("from")}
                                                onChange={(e) => { setDateFrom(e.target.value) }}
                                                defaultValue={format(dateFromTest, 'yyyy-MM-dd')}
                                            />
                                        </FormControl>
                                        <FormControl mt={4} isRequired>
                                            <FormLabel>Até</FormLabel>
                                            <Input
                                                type="date"
                                                {...register("to")}
                                                onChange={(e) => { setDateTo(e.target.value) }}
                                                defaultValue={format(dateToTest, 'yyyy-MM-dd')}
                                            />
                                        </FormControl>
                                        <FormControl mt={4} isRequired>
                                            <FormLabel>Número de Pessoas</FormLabel>
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
                                            <FormLabel>Número de Noites</FormLabel>
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
                                            <FormLabel>Preço Final</FormLabel>
                                            <Input
                                                type="number"
                                                {...register("priceFinal")}
                                                value={priceFinal}
                                            />
                                        </FormControl>
                                        <Button colorScheme='blue' mr={3} type="submit" isLoading={isSubmitting}>
                                            Reservar Quarto
                                        </Button>
                                    </form>
                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={onClose}>Cancelar</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                )
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

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