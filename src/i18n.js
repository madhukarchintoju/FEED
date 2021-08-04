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
        analytics: 'Analytics',
        vision: `To spread to all corners of India and emerge as a
        one-stop solution to farmers, small traders, MSMEs,
        new entrepreneurs from rural and semi-urban areas for
        marketing their agricultural commodities in domestic
        and International markets by means of effective
        technical interface.`,
        mission: `To form product based cooperative societies (FPOs),
        impart the capacity building to export in the form of
        training sessions, provide the information on global
        marketing opportunities through"FEED STARTUP"
        Technology for their respective agricultural products
        and render end-to-end support in real-time export
        process i.e., from selection of buyers to shipment of
        good.`,
        main_objective: '',
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
        analytics: 'విశ్లేషణలు',
        vision:
          'గ్రామీణ పట్టణ ప్రాంతాల్లోని రైతులు, వ్యాపారులు, MSME పరిశ్రమలు, నూతన ఔత్సాహిక పారిశ్రామిక వేత్తలు వ్యవసాయ  ఉత్పత్తులను దేశీయ మరియు అంతర్జాతీయ మార్కెట్లో మార్కెటింగ్ చేసుకునేందుకు అవసరమైన సమర్ధవంతమైన సాంకేతిక వేదికను వినియోగించి దేశంలోని అన్ని ప్రాంతాల్లో ఆరోగ్యకరమైన సాగు నుంచి ఉత్పత్తుల ఎగుమతుల వరకు సమస్త సేవలు అందించేందుకు ఏకీకృత పరిష్కార వేదికగా FEED కృషి చేస్తుంది.',
        mission: '',
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
        analytics: 'एनालिटिक्स',
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
