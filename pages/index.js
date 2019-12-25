import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = ({ t }) => {

  return (
    <>
      <main>
        <Header title={t('h1')} />
      </main>
      <Footer />
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);