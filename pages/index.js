import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '../i18n';
import HomePanel from '../components/HomePanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle, faTripadvisor } from '@fortawesome/free-brands-svg-icons';
import { faClock, faAddressCard } from '@fortawesome/free-regular-svg-icons';

const Homepage = ({ t }) => {

  return (
    <>
      <Head>
        <title>{t('homepage')} - {t('restaurant')}</title>
      </Head>
      <HomeContent>
        <Grid container>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={6} style={{ borderRight: '1px solid #ebebeb' }}>
              <HomePanel icon={<FontAwesomeIcon icon={faClock} size="4x" />} title={t('opening-time')}>
                {t('opening-days')}
                <br />
                {t('lunch-hours')}
                <br />
                {t('dinner-hours')}
                <br />
                {t('closed')}
              </HomePanel>
            </Grid>
            <Grid item xs={12} md={6}>
              <HomePanel icon={<FontAwesomeIcon icon={faAddressCard} size="4x" />} title={t('contact')}>
                12 rue des marchands
                <br />
                68000 COLMAR
                <br />
                (+33) 3 89 41 24 79
                <br />
                contact@mammagiovanna.com
              </HomePanel>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ borderTop: '1px solid #ebebeb' }}>
            <HomePanel title={t('follow-us')}>
              <SocialLink href="https://www.facebook.com/mammagiovanna.colmar/" target="blank">
                <SocialIcon icon={faFacebookF} size="4x" />
              </SocialLink>
              {/* <SocialLink href="" target="blank">
                <SocialIcon icon={faInstagram} size="4x" />
              </SocialLink> */}
              <SocialLink href="https://www.google.com/search?client=firefox-b-d&q=mamma+giovanna+colmar" target="blank">
                <SocialIcon icon={faGoogle} size="4x" />
              </SocialLink>
              <SocialLink href="https://www.tripadvisor.fr/Restaurant_Review-g187073-d10439955-Reviews-Mamma_Giovanna-Colmar_Haut_Rhin_Grand_Est.html?m=19905" target="blank">
                <SocialIcon icon={faTripadvisor} size="4x" />
              </SocialLink>
            </HomePanel>
          </Grid>
        </Grid>
      </HomeContent>
    </>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const HomeContent = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  line-height: 3em;
`;

const SocialLink = styled.a`
  color: #3D3D3D
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 40px 100px;
  &:hover {
    animation: ${rotate} 0.3s linear;
  }
`;

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);