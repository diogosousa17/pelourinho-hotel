import { Button, Center, HStack } from "@chakra-ui/react"
import { useRouter } from "next/router"


export function PaginationComp({ page }: any) {

    const router = useRouter()

    function previousPage() {
        let prev = page.page
        if (prev <= 1) {
        } else {
            router.push(`/bedrooms/?page=${prev - 1}`)
        }
    }

    function nextPage() {
        let next = page.page
        next++
        router.push(`/bedrooms/?page=${next}`)
    }

    return (
        <>
            <Center my="10px">
                <HStack h="100%" align="flex-end">
                    <Button onClick={previousPage}>Página Anterior</Button>
                    <Button onClick={nextPage}>Próxima Página</Button>
                </HStack>
            </Center>
        </>
    )
}