import React from 'react';
import Head from 'next/head';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import { i18n, useTranslation } from '../i18n';
import { useTranslation, i18n } from 'next-i18next';
import HomePanel from '../components/HomePanel';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faClock, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FaTripadvisor, FaFacebookF, FaInstagram, FaGoogle, FaClock, FaAddressCard } from 'react-icons/fa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

const Homepage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('common:homepage')} - {t('common:restaurant')}</title>
      </Head>
      <Header land={i18n.language} />
      <Body>
        <HomeContent>
          <Grid container justifyContent="center">
            {/* <Grid container justify="center" alignItems="center">
              <Section>
                <Emoji>⚠️</Emoji><br />
                {t('common:dear-customers')},<br /><br />
                {t('common:lockdown2-declaration')}<br /><br />
                {t('common:lockdown2-orders')} <br />
                {t('common:lockdown2-ubereats')}<br /><br />
                {t('common:lockdown2-support')}<br />
                <Emoji>😇</Emoji><br />
                {t('common:lockdown2-see-u')}<br />
              </Section>
            </Grid> */}
            <Grid container justifyContent="center" alignItems="center">
              <GridCellWithRightBorder item xs={10} md={6}>
                <HomePanel icon={<HomeIcon><FaClock /></HomeIcon>} title={t('common:opening-time')}>
                  {t('common:opening-days')}
                  <br />
                  {t('common:lunch-hours')}
                  <br />
                  {t('common:dinner-hours')}
                  <br />
                  {t('common:closed')}
                  {/* {t('common:opening-days-covid')}
                  <br />
                  {t('common:opening-hours-covid')}
                  <br />
                  {t('common:closed-covid')}
                  <br />
                  {t('common:closed-covid-2')} */}
                  {/*t('common:opening-days-lockdown2')}
                  <br />
                  {t('common:opening-hours-lockdown2')}
                  <br />
                  {t('common:closed-lockdown2')*/}
                </HomePanel>
              </GridCellWithRightBorder>
              <Grid item xs={10} md={6}>
                <HomePanel icon={<HomeIcon><FaAddressCard /></HomeIcon>} title={t('common:contact')}>
                  12 rue des marchands
                  <br />
                  68000 COLMAR
                  <br />
                  (+33) 3 89 41 24 79
                  <br />
                  <br />
                </HomePanel>
              </Grid>
            </Grid>
            <Grid item xs={10} style={{ borderTop: '1px solid #ebebeb' }}>
              <HomePanel title={t('common:follow-us')}>
                <SocialLink href="https://www.facebook.com/mammagiovanna.colmar/" target="blank">
                  <SocialIcon><FaFacebookF /></SocialIcon>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/mammagiovanna_fr/" target="blank">
                  <SocialIcon><FaInstagram /></SocialIcon>
                </SocialLink>
                <SocialLink href="https://www.google.com/search?client=firefox-b-d&q=mamma+giovanna+colmar" target="blank">
                  <SocialIcon><FaGoogle /></SocialIcon>
                </SocialLink>
                <SocialLink href="https://www.tripadvisor.fr/Restaurant_Review-g187073-d10439955-Reviews-Mamma_Giovanna-Colmar_Haut_Rhin_Grand_Est.html?m=19905" target="blank">
                  <SocialIcon><FaTripadvisor /></SocialIcon>
                </SocialLink>
              </HomePanel>
            </Grid>
          </Grid>
        </HomeContent>
      </Body>
      <Footer />
    </>
  );
};

// const Emoji = styled('span')`
//   font-size: 3em;
//   line-height: 1.5em;
// `;

// const Section = styled('div')`
//   font-size: 1.5em;
//   text-align: center;
//   font-weight: bold;
//   color: white;
//   width: 90%;
//   margin: 20px 5%;
//   border-radius: 30px;
//   background-color: tomato;
//   padding: 30px;
//   border: 3px solid lightcoral;
//   line-height: 2em;
// `;

const GridCellWithRightBorder = styled(Grid)`
  @media (min-width: 960px) {
    border-right: 1px solid #ebebeb;
  }
  @media (max-width: 959px) {
    border-bottom: 1px solid #ebebeb;
  }
`;

const HomeContent = styled('div')`
  padding-top: 100px;
  padding-bottom: 100px;
  line-height: 3em;
  @media (max-width: 500px) {
    padding-top: 20px;
    padding-bottom: 0px;
  }
`;

const SocialLink = styled('a')`
  color: #3D3D3D;
`;

const HomeIcon = styled('div')`
  font-size: 4em;
  margin-bottom: 20px;
`;

const SocialIcon = styled('div')`
  margin: 20px 40px;
  font-size: 10vh;
  @media (min-width: 960px) {
    margin: 40px 65px;
  }
`;

// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// });

export default Homepage;