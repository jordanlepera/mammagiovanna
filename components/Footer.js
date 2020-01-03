import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import _uniqueId from 'lodash/uniqueId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from '../i18n';

const Footer = ({ t }) => {

  const navlinks = [
    {
      title: t('homepage'),
      url: '/'
    },
    {
      title: t('menu'),
      url: '/menu'
    }
  ];

  const sociallinks = [
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/mammagiovanna.colmar/'
    },
    // {
    //   title: 'Instagram',
    //   url: ''
    // },
    {
      title: 'Google',
      url: 'https://www.google.com/search?client=firefox-b-d&q=mamma+giovanna+colmar'
    },
    {
      title: 'Tripadvisor',
      url: 'https://www.tripadvisor.fr/Restaurant_Review-g187073-d10439955-Reviews-Mamma_Giovanna-Colmar_Haut_Rhin_Grand_Est.html?m=19905'
    }
  ];

  const Navlink = () => navlinks.map(link => (
    <div key={_uniqueId('navlink-')}>
      <FooterLink href={link.url}>
        {link.title}
      </FooterLink>
      <br />
    </div>
  ));

  const Sociallink = () => sociallinks.map(link => (
    <div key={_uniqueId('sociallink-')}>
      <FooterLink href={link.url} target="blank">
        {link.title}
      </FooterLink>
      <br />
    </div>
  ));

  return (
    <footer>
      <FooterFlex>
        <FooterContainer>
          <NavBlock>
            <Title>{t('navigation')}</Title>
            <br />
            <Navlink />
          </NavBlock>
          <GoTopBlock>
            <GoUpButton onClick={() => window.scrollTo(0, 0)}>
              <SocialIcon icon={faArrowAltCircleUp} />
              {t('go-to-top')}
            </GoUpButton>
          </GoTopBlock>
          <SocialBlock>
            <Title>{t('social-networks')}</Title>
            <br />
            <Sociallink />
          </SocialBlock>
        </FooterContainer>
      </FooterFlex>
      <Author>
        © 2020 - Jordan Le Pera
      </Author>
    </footer>
  );
};

const FooterLink = styled.a`
  text-decoration: none;
  color: #ebebeb;
`;

const Title = styled.div`
  font-weight: bold;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 5vh;
  color: white;
  margin-bottom: 10px;
`;

const GoUpButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .MuiButton-label {
      flex-direction: column;
      line-height: 1em;
      text-transform: none;
      color: white;
    }
`;

const NavBlock = styled.div`
  padding: 0 20px 0 20px;
  border-right: 1px solid #ebebeb;
  height: 100%;
  width: 33.33%;
`;

const GoTopBlock = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  width: 33.33%;
`;

const SocialBlock = styled.div`
  padding: 0 20px 0 20px;
  border-left: 1px solid #ebebeb;
  text-align: right;
  height: 100%;
  width: 33.33%;
`;

const FooterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #635959;
  padding-top: 30px;
  color: white;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 1200px;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;
  height: 150px;
`;

const Author = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
  padding: 15px;
  background-color: #4c2d19;
`;

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Footer);