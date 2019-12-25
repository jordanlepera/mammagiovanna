import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { i18n } from '../i18n';

const CountrySelect = () => {

  const languageOptions = [
    { value: 'fr', label: '🇫🇷 Français' },
    { value: 'en', label: '🇬🇧 English' },
    { value: 'de', label: '🇩🇪 Deutsch' },
    { value: 'it', label: '🇮🇹 Italiano' }
  ];

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <SelectCountry
      className="basic-single"
      classNamePrefix="select"
      defaultValue={languageOptions[0]}
      isClearable={false}
      isSearchable={false}
      name="language"
      value={languageOptions.find(o => o.value === i18n.language)}
      options={languageOptions}
      onChange={handleChange}
    />
  );
};

const SelectCountry = styled(Select)`
  font-family: Roboto;
  width: 200px;
  color: black;
`;

export default CountrySelect;