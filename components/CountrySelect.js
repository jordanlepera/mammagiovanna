import React from 'react';
import PropTypes from 'prop-types';
// import dynamic from "next/dynamic";
import styled from '@emotion/styled';
// import _uniqueId from 'lodash/uniqueId';
// import { i18n } from 'next-i18next';
import Select from 'react-select';
import i18nextConfig from '../next-i18next.config';
import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
//Remove use of ssr fo this component because it creates an error in the console
// const Select = dynamic(() => import('react-select'), {
//   ssr: false,
// });

const CountrySelect = () => {
  // const { t } = useTranslation(['common', 'menu']);
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = React.useState(i18nextConfig.i18n.defaultLocale);

  const languageOptions = [
    { value: 'fr', label: '🇫🇷 Français' },
    { value: 'en', label: '🇬🇧 English' },
    { value: 'de', label: '🇩🇪 Deutsch' },
    { value: 'it', label: '🇮🇹 Italiano' }
  ];

  const handleChange = (selectedOption) => {
    router.locale = selectedOption.value;
    router.replace(router.asPath, undefined, { locale: selectedOption.value });
    // router.locale = selectedOption.value;
    // t('change-locale', { changeTo: selectedOption.value });
  };

  React.useEffect(() => {
    setCurrentLocale(router.locale);
  }, [router.locale]);

  return (
    <SelectCountry
      className="basic-single"
      classNamePrefix="select"
      defaultValue={languageOptions[0]}
      isClearable={false}
      isSearchable={false}
      name="language"
      value={languageOptions.find((obj) => obj.value === currentLocale)}
      options={languageOptions}
      onChange={handleChange}
    />
  );
};

CountrySelect.propTypes = {
  lang: PropTypes.string
};

const SelectCountry = styled(Select)`
  font-family: Roboto;
  width: 200px;
  color: black;
`;

export default CountrySelect;