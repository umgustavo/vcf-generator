import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    colors: {
        purple: {
            50: '#FAF5FF',
            100: '#E9D8FD',
            200: '#D6BCFA',
            300: '#B794F4',
            400: '#9F7AEA',
            500: '#805AD5',
            600: '#6B46C1',
            700: '#553C9A',
            800: '#44337A',
            900: '#322659',
        },
    },
    fonts: {
        body: '"Poppins", sans-serif',
        heading: '"Poppins", sans-serif',
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    semanticTokens: {
        colors: {
            accent: {
                _dark: 'white',
                default: 'black',
            },
            text: {
                _dark: 'rgba(255, 255, 255, 0.65)',
                default: 'rgba(0, 0, 0, 0.65)',
            },
            dim: {
                _dark: 'rgba(255, 255, 255, 0.35)',
                default: 'rgba(0, 0, 0, 0.35)',
            },
            border: {
                _dark: 'rgba(255, 255, 255, 0.1)',
                default: 'rgba(0, 0, 0, 0.1)',
            },
        },
    },
    components: {
        Heading: {
            baseStyle: {
                color: 'accent',
            },
        },
        Text: {
            baseStyle: {
                color: 'text',
            },
        },
        Link: {
            baseStyle: {
                color: 'text',
            },
        },
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
            body: {
                bg: mode('#fff', '#070510')(props),
            },
        }),
    },
});
