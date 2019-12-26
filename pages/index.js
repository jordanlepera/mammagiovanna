import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withTranslation } from '../i18n';

const Homepage = ({ t }) => {

  return (
    <>
      <Head>
        <title>{t('homepage')} - {t('restaurant')}</title>
      </Head>
      {t('homepage')}
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['header'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Homepage);