import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Layout = props => {

  return (
    <>
      <Header />
      <Body>
        {props.children}
      </Body>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;