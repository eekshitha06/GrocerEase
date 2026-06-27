import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    home: 'Home',
    shop: 'Shop',
    categories: 'Categories',
    search: 'Search products...',
    login: 'Login',
    logout: 'Logout',
    signup: 'Sign Up',
    cart: 'Cart',
    profile: 'Profile',
    addToCart: 'Add to Cart',
    checkout: 'Checkout',
    welcome: 'Welcome to Grocery Ease',
    heroSubtitle: 'Fresh groceries delivered to your doorstep.',
    popularCategories: 'Popular Categories',
    featuredProducts: 'Featured Products',
    total: 'Total',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
  },
  te: {
    home: 'హోమ్',
    shop: 'షాప్',
    categories: 'వర్గాలు',
    search: 'ఉత్పత్తులను శోధించండి...',
    login: 'లాగిన్',
    logout: 'లాగ్అవుట్',
    signup: 'సైన్ అప్',
    cart: 'కార్ట్',
    profile: 'ప్రొఫైల్',
    addToCart: 'కార్ట్‌కు జోడించు',
    checkout: 'చెక్అవుట్',
    welcome: 'కిరాణా ఈజ్‌కి స్వాగతం',
    heroSubtitle: 'తాజా కిరాణా మీ ఇంటి వద్దకే డెలివరీ చేయబడుతుంది.',
    popularCategories: 'జనాదరణ పొందిన వర్గాలు',
    featuredProducts: 'ఫీచర్ చేయబడిన ఉత్పత్తులు',
    total: 'మొత్తం',
    emptyCart: 'మీ కార్ట్ ఖాళీగా ఉంది',
    continueShopping: 'కార్ట్ కొనుగోలు కొనసాగించండి',
  },
  hi: {
    home: 'होम',
    shop: 'दुकान',
    categories: 'श्रेणियां',
    search: 'उत्पाद खोजें...',
    login: 'लॉग इन',
    logout: 'लॉग आउट',
    signup: 'साइन अप',
    cart: 'कार्ट',
    profile: 'प्रोफाइल',
    addToCart: 'कार्ट में डालें',
    checkout: 'चेकआउट',
    welcome: 'ग्रोसरी ईज में आपका स्वागत है',
    heroSubtitle: 'ताजा किराने का सामान आपके दरवाजे पर दिया जाता है।',
    popularCategories: 'लोकप्रिय श्रेणियाँ',
    featuredProducts: 'लोकप्रिय उत्पाद',
    total: 'कुल',
    emptyCart: 'आपकी कार्ट खाली है',
    continueShopping: 'खरीदारी जारी रखें',
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
