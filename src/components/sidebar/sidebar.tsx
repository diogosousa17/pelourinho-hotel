import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    VStack,
} from '@chakra-ui/react';
import {
    FiMenu,
    FiUsers
} from 'react-icons/fi';
import { MdOutlineBedroomParent } from 'react-icons/md'
import { useRouter } from 'next/router';
import { UsersDashboard } from '../usersDashboard/usersDashboard'
import { BedroomsDashboard } from '../bedroomsDashboard/bedroomsDashboard';
import { CreateBedrooms } from '../createBedroom/createBedrooms';
import { RiUserAddLine } from 'react-icons/ri';
import { BsPlusCircle } from 'react-icons/bs';

export function Sidebar({ children }: any) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex>
                <Box minH="calc(100vh - 124px)">
                    <SidebarContent
                        onClose={() => onClose}
                        display={{ base: 'none', md: 'block' }}
                    />
                    <Drawer
                        autoFocus={false}
                        isOpen={isOpen}
                        placement="left"
                        onClose={onClose}
                        returnFocusOnClose={false}
                        onOverlayClick={onClose}
                        size="full">
                        <DrawerContent>
                            <SidebarContent onClose={onClose} />
                        </DrawerContent>
                    </Drawer>
                    <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
                    <Box ml={{ base: 0, md: 60 }} p="4">
                        {children}
                    </Box>
                </Box>
                <Box>
                </Box>
            </Flex>
        </>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {

    const router = useRouter()

    return (
        <>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
                {...rest}>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        Dashboard
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                <VStack align="flex-start" mx="35px">
                    <Flex
                        align="center"
                        as="button"
                        onClick={() => { router.push('/dashboard/users') }}
                    >
                        <Icon as={FiUsers} />
                        <Text mx="10px">Users</Text>
                    </Flex>
                    <Flex
                        align="center"
                        as="button"
                        onClick={() => { router.push('/dashboard/bedrooms') }}
                    >
                        <MdOutlineBedroomParent />
                        <Text mx="10px">Bedrooms</Text>
                    </Flex>
                    <Flex
                        align="center"
                        as="button"
                        onClick={() => { router.push('/dashboard/createBedroom') }}
                    >
                        <BsPlusCircle />
                        <Text mx="10px">Create Bedroom</Text>
                    </Flex>
                    <Flex
                        align="center"
                        as="button"
                        onClick={() => { router.push('/dashboard/createUser') }}
                    >
                        <RiUserAddLine />
                        <Text mx="10px">Create User</Text>
                    </Flex>
                </VStack>
            </Box>
        </>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <>
            <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 24 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue('white', 'gray.900')}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent="flex-start"
                {...rest}>
                <IconButton
                    variant="outline"
                    onClick={onOpen}
                    aria-label="open menu"
                    icon={<FiMenu />}
                />

                <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                    Dashboard
                </Text>
            </Flex>
        </>
    )
}