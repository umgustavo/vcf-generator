import { useState, useRef } from 'react';
import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

function App() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const textRef = useRef();

    const defaultPlaceholder = [
        'Contato 1,+55990000000',
        'Contato 2,+55990000000',
        'Contato 3,+55990000000',
    ];

    function validateInput(str) {
        try {
            for (let line of str.split('\n')) {
                line = line.trim();
                if (line.length === 0) return false;
                if (line.split(',').length !== 2) return false;
                if (line.split(',')[0].length === 0) return false;
                if (line.split(',')[1].length === 0) return false;
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    function handleInput(e) {
        const validate = validateInput(e.target.value);
        setButtonDisabled(!validate);
    }

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
        );
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function handleSubmit(e) {
        if (!textRef.current) return;
        if (buttonDisabled) return;
        if (!validateInput(textRef.current.value)) return;

        const result = [];
        const contacts = textRef.current.value.split('\n');
        for (const contact of contacts) {
            const [name, number] = contact.split(',');
            result.push(
                'BEGIN:VCARD\nVERSION:3.0\nN:' +
                    name +
                    '\nTEL;TYPE=CELL:' +
                    number +
                    '\nEND:VCARD'
            );
        }
        download('contacts.vcf', result.join('\n'));
    }

    return (
        <Box>
            <Box
                as='nav'
                py={6}
                borderBottom='1px'
                borderColor='gray.700'
                mb={5}
            >
                <Container maxW='container.sm' textAlign='center'>
                    <Heading>VCF Generator</Heading>
                </Container>
            </Box>
            <Container maxW='container.sm'>
                <VStack spacing={3}>
                    <Text color='gray.500' textAlign='justify'>
                        Coloque aqui a lista dos contatos com o nome, adicione
                        uma vírgula e em seguida adicione o número de telefone
                        com o código do país (+55 para Brasil) e o DDD. Você
                        pode repetir esse processo em quantas linhas quiser.
                    </Text>
                    <Textarea
                        placeholder={defaultPlaceholder.join('\n')}
                        rows={10}
                        fontFamily='monospace'
                        onInput={handleInput}
                        ref={textRef}
                    />
                    <Button
                        w='100%'
                        isDisabled={buttonDisabled}
                        onClick={handleSubmit}
                    >
                        Gerar VCF
                    </Button>
                </VStack>
            </Container>
            <Box
                display={['none', 'none', 'flex']}
                position='fixed'
                bottom={0}
                left={0}
                p={3}
                background='gray.900'
                w='100%'
                justifyContent='center'
            >
                <Text color='gray.500' d='flex' alignItems='center' gap='8px'>
                    Ferramenta criada com{' '}
                    <FaHeart color='red' display='inline-block' />
                    especialmente para meu pai.
                </Text>
            </Box>
        </Box>
    );
}

export default App;
