import { Box } from '@chakra-ui/react';

export default function Background() {
    return (
        <Box
            as='svg'
            width='100%'
            height='100vh'
            inset='0px'
            zIndex='-1'
            position='absolute'
            pointerEvents='none'
        >
            <defs>
                <linearGradient
                    gradientTransform='rotate(75)'
                    id='bg-background-gradient'
                >
                    <stop
                        offset='0%'
                        stop-color='#8957ff33'
                        style={{ transition: 'stop-color 0.6s ease' }}
                    ></stop>
                    <stop offset='100%' stop-color='transparent'></stop>
                </linearGradient>
            </defs>
            <rect
                fill="url('#bg-background-gradient')"
                width='100%'
                height='100%'
                style={{ width: '100%', height: '100%' }}
            ></rect>
        </Box>
    );
}
