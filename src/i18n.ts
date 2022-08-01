import enUS from './i18n/enUS.json';
import ptBR from './i18n/ptBR.json';
import esES from './i18n/esES.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  enUS: {
    translation: enUS,
  },
  ptBR: {
    translation: ptBR,
  },
  esES: {
    translation: esES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem('language') || '"enUS"'),
  fallbackLng: 'enUS',
});

export default i18n;
