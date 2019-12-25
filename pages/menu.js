import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Menu = ({ t }) => (
  <>
    <main>
      <Header title={t('h1')} />
      {t('menu')}
    </main>
    <Footer />
  </>
);

Menu.getInitialProps = async () => ({
  namespacesRequired: ['menu', 'header'],
});

Menu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Menu);