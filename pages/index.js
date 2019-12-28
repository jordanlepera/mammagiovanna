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
        <Grid container justify="center">
          <Grid container justify="center" alignItems="center">
            <GridCellWithRightBorder item xs={10} md={6}>
              <HomePanel icon={<FontAwesomeIcon icon={faClock} size="4x" />} title={t('opening-time')}>
                {t('opening-days')}
                <br />
                {t('lunch-hours')}
                <br />
                {t('dinner-hours')}
                <br />
                {t('closed')}
              </HomePanel>
            </GridCellWithRightBorder>
            <Grid item xs={10} md={6}>
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
          <Grid item xs={10} style={{ borderTop: '1px solid #ebebeb' }}>
            <HomePanel title={t('follow-us')}>
              <SocialLink href="https://www.facebook.com/mammagiovanna.colmar/" target="blank">
                <SocialIcon icon={faFacebookF} />
              </SocialLink>
              {/* <SocialLink href="" target="blank">
                <SocialIcon icon={faInstagram} />
              </SocialLink> */}
              <SocialLink href="https://www.google.com/search?client=firefox-b-d&q=mamma+giovanna+colmar" target="blank">
                <SocialIcon icon={faGoogle} />
              </SocialLink>
              <SocialLink href="https://www.tripadvisor.fr/Restaurant_Review-g187073-d10439955-Reviews-Mamma_Giovanna-Colmar_Haut_Rhin_Grand_Est.html?m=19905" target="blank">
                <SocialIcon icon={faTripadvisor} />
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

const GridCellWithRightBorder = styled(Grid)`
  @media (min-width: 960px) {
    border-right: 1px solid #ebebeb;
  }
  @media (max-width: 959px) {
    border-bottom: 1px solid #ebebeb;
  }
`;

const HomeContent = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  line-height: 3em;
  @media (max-width: 500px) {
    padding-top: 20px;
    padding-bottom: 0px;
  }
`;

const SocialLink = styled.a`
  color: #3D3D3D
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 20px 40px;
  font-size: 5vh;
  &:hover {
    animation: ${rotate} 0.3s linear;
  }
  @media (min-width: 960px) {
    margin: 40px 100px;
  }
`;

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);