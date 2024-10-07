import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import FlagsSelect from 'react-flags-select';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState("US");

  // Memoize the country-to-language map to prevent it from changing on every render
  const countryToLanguageMap = useMemo(() => ({
    US: 'en',
    DE: 'de'
  }), []);

  useEffect(() => {
    // Set the initial country based on the current language
    const currentLanguage = i18n.language;
    const initialCountry = Object.keys(countryToLanguageMap).find(
      (key) => countryToLanguageMap[key] === currentLanguage
    );
    setSelectedCountry(initialCountry || 'US');
  }, [i18n.language, countryToLanguageMap]);

  const handleLanguageChange = (countryCode) => {
    const languageCode = countryToLanguageMap[countryCode];
    if (languageCode) {
      i18n.changeLanguage(languageCode);
      setSelectedCountry(countryCode);
    }
  };

  return (
    <div className="flex items-center justify-between flex-grow p-4 transition-all duration-300">
      <h1 className="font-bold text-md sm:text-left">{t('header.title')}</h1>
      <div className="flex items-center">
        <FlagsSelect
          countries={["US", "DE"]}
          customLabels={{ US: 'English', DE: 'Deutsch' }}
          selected={selectedCountry}
          onSelect={handleLanguageChange}
          placeholder={t('header.selectLanguage')}
        />
      </div>
    </div>
  );
};

export default Header;
