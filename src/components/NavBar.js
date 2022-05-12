import { Box, Container, Heading, Link } from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Box as='nav' py={6} borderBottom='1px' borderColor='gray.700' mb={5}>
            <Container
                maxW='container.sm'
                d='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Heading>VCF Generator</Heading>
                <Link
                    color='gray.600'
                    href={`https://github.com/umgustavo/vcf-generator/commit/${process.env.REACT_APP_GIT_SHA}`}
                    target='_blank'
                >
                    {process.env.REACT_APP_GIT_SHA}
                </Link>
            </Container>
        </Box>
    )
}
