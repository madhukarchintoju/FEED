import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                home: 'Home',
                about_us: 'About Us',
                services: 'Services',
                events: 'Events',
                how_feed_works: 'How Feed Works',
                fpo: 'FPO',
                exports: 'Exports',
                contact_us: 'Contact Us',
                login_caps: 'LOGIN',
                register_caps: 'REGISTER',
            },
        },
        te: {
            translations: {
                home: 'హోమ్',
                about_us: 'మా గురించి',
                services: 'సేవలు',
                events: 'సంఘటనలు',
                how_feed_works: 'మేము ఎలా పని చేస్తాము',
                fpo: 'ఎఫ్పీఓ',
                exports: 'ఎగుమతులు',
                contact_us: 'మమ్మల్ని సంప్రదించండి',
                login_caps: 'ప్రవేశించండి',
                register_caps: 'రిజిస్టర్',
            },
        },

        hin: {
            translations: {
                home: 'होम',
                about_us: 'हमारे बारे मे',
                services: 'सेवाएं',
                events: 'आयोजन',
                how_feed_works: 'हम कैसे काम करते है',
                fpo: 'एफपीओ',
                exports: 'निर्यात',
                contact_us: 'संपर्क करे',
                login_caps: 'लॉग इन करें',
                register_caps: 'रजिस्टर करें',
            },
        },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
    },

    react: {
        wait: true,
    },
})

export default i18n
