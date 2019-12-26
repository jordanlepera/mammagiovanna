import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withTranslation } from '../i18n';

const Menu = ({ t }) => (
  <>
    <Head>
      <title>{t('menu')} - {t('restaurant')}</title>
    </Head>
    {t('menu')}
  </>
);

Menu.getInitialProps = async () => ({
  namespacesRequired: ['header'],
});

Menu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Menu);