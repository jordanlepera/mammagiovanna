import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Head from 'next/head';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

const Header = props => {
  const { title, t } = props;

  return (
    <>
      <Head>
        <base href="./" />
        <title>{t('h1')}</title>
        <link data-react-helmet="true" rel="icon" href="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media" />
      </Head>
      <Nav />
      <Banner />
    </>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Header.propTypes = {
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withTranslation('common')(Header);