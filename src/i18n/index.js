import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en, pt_BR } from './locales';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            'pt-BR': pt_BR,
        },
        detection: {
            order: [
                'localStorage',
                'cookie',
                'querystring',
                'sessionStorage',
                'navigator',
                'htmlTag',
                'path',
                'subdomain',
            ],
            lookupCookie: 'lng',
            lookupLocalStorage: 'lng',
            lookupSessionStorage: 'lng',
            lookupQuerystring: 'lng',
        },
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: 'en',
        lng: 'en',
    });

export default i18n;
