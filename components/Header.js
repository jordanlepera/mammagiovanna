import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Banner from './Banner';

const Header = props => {
  const { lang } = props;

  return (
    <>
      <Nav lang={lang} />
      <Banner />
    </>
  );
};

Header.propTypes = {
  lang: PropTypes.string
};

export default Header;