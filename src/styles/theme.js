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
    styles: {
        global: (props) => ({
            '@keyframes heartbeat': {
                '0%': {
                    transform: 'scale(1.1)',
                },
                '100%': {
                    transform: 'scale(1)',
                },
            },
            '.heartbeat': {
                animation: 'heartbeat .6s ease-out infinite',
            },
        }),
    },
});
