import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

export default function FrontPage() {
    return (
        <>

            <Container maxW={'100%'} bg='gray.50'>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading>
                        <Text
                            bgGradient="linear(315deg, #045de9 0%, #09c6f9 74%)"
                            bgClip="text"
                            fontSize="6xl"
                            fontWeight="extrabold"
                        >
                            <Text as={'span'} fontSize="6xl">
                                The<text> </text>
                            </Text>
                            Recipes <br></br> Database
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        A database of thousands of recipes from your favorite websites all in one place!
                    </Text>
                </Stack>
            </Container>
        </>
    );
}
