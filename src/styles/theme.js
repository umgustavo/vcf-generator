import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        body: '"Poppins", sans-serif',
        heading: '"Poppins", sans-serif',
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
});
