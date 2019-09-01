import Vue from 'vue';
import VueI18n, { IntlAvailability } from 'vue-i18n';

import en from './resources/en';
import pt from './resources/pt';

const messages = {
    en,
    pt,
    'pt-BR': pt,
};

const displayableLanguages: string[] = ['en', 'pt-BR'];
const availableLanguages: string[] = Object.getOwnPropertyNames(messages);

Vue.use(VueI18n);

let firstLocale = 'en';
const userLanguages = navigator.languages ? navigator.languages : [navigator.language];
for (const userLanguage of userLanguages) {
    if (availableLanguages.indexOf(userLanguage) >= 0) {
        firstLocale = userLanguage;
        break;
    }
}

const i18n = new VueI18n({
    messages,
    locale: firstLocale,
    fallbackRoot: false,
    fallbackLocale: 'en',
});

export { i18n, availableLanguages, displayableLanguages };
export default i18n;
