import { useState, useRef } from 'react';
import {
    Box,
    Button,
    Container,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Background from './components/Background';

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
                    <Text textAlign='justify'>{t('description')}</Text>
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

            <Footer />
            <Background />
        </Box>
    );
}

export default App;
