import { useState, useRef } from 'react';
import {
    Box,
    Button,
    Container,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';

function App() {
    const { t } = useTranslation();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const textRef = useRef();

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
            <NavBar />
            <Container maxW='container.sm'>
                <VStack spacing={3}>
                    <Text color='gray.500' textAlign='justify'>
                        {t('description')}
                    </Text>
                    <Textarea
                        placeholder={t('examples')}
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
                        {t('generate_vcf')}
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
                    {t('footer_1')}
                    <FaHeart
                        color='red'
                        display='inline-block'
                        className='heartbeat'
                    />
                    {t('footer_2')}
                </Text>
            </Box>
        </Box>
    );
}

export default App;
