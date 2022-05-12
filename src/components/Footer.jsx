import { Box, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <Box
            display={['none', 'none', 'flex']}
            position='fixed'
            bottom={0}
            left={0}
            p={2}
            background='rgba(255, 255, 255, 0.025)'
            w='100%'
            justifyContent='center'
        >
            <Text d='flex' alignItems='center' gap='8px'>
                {t('footer_1')}
                <FaHeart
                    display='inline-block'
                    className='heartbeat'
                    color='red'
                />
                {t('footer_2')}
            </Text>
        </Box>
    );
}
