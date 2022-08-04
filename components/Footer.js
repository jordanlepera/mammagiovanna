import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import _uniqueId from 'lodash/uniqueId';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  const navlinks = [
    {
      title: t('common:homepage'),
      url: '/'
    },
    {
      title: t('common:menu'),
      url: '/menu'
    }
  ];

  const sociallinks = [
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/mammagiovanna.colmar/'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/mammagiovanna_fr/'
    },
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
    <FooterElem key={_uniqueId('navlink-')}>
      <div>
        <FooterLink href={link.url}>
          {link.title}
        </FooterLink>
      </div>
    </FooterElem>
  ));

  const Sociallink = () => sociallinks.map(link => (
    <FooterElem key={_uniqueId('sociallink-')}>
      <div>
        <FooterLink href={link.url} target="blank" rel="noopener">
          {link.title}
        </FooterLink>
      </div>
    </FooterElem>
  ));

  return (
    <footer>
      <FooterFlex>
        <FooterContainer>
          <NavBlock>
            <Title>{t('common:navigation')}</Title>
            <br />
            <FooterElemList>
              <Navlink />
            </FooterElemList>
          </NavBlock>
          <GoTopBlock>
            <GoUpButton onClick={() => window.scrollTo(0, 0)}>
              <SocialIcon><FaArrowAltCircleUp /></SocialIcon>
              {t('common:go-to-top')}
            </GoUpButton>
          </GoTopBlock>
          <SocialBlock>
            <Title>{t('common:social-networks')}</Title>
            <br />
            <FooterElemList>
              <Sociallink />
            </FooterElemList>
          </SocialBlock>
        </FooterContainer>
      </FooterFlex>
      <Author>
        © 2020 - Jordan Le Pera
      </Author>
    </footer>
  );
};

const FooterElemList = styled('ul')`
  padding-inline-start: 0px;
`;

const FooterElem = styled('li')`
  list-style-type: none;
  min-width: 48px;
  min-height: 30px;
`;

const FooterLink = styled('a')`
  text-decoration: none;
  color: #ebebeb;
`;

const Title = styled('div')`
  font-weight: bold;
  color: white;
`;

const SocialIcon = styled('div')`
  font-size: 10vh;
  color: white;
  margin-bottom: 10px;
`;

const GoUpButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    & .MuiButton-label {
      flex-direction: column;
      line-height: 1em;
      text-transform: none;
      color: white;
    }
`;

const NavBlock = styled('div')`
  padding: 0 20px 0 20px;
  border-right: 1px solid #ebebeb;
  height: 100%;
  width: 33.33%;
  min-height: 208px;
`;

const GoTopBlock = styled('div')`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  width: 33.33%;
`;

const SocialBlock = styled('div')`
  padding: 0 20px 0 20px;
  border-left: 1px solid #ebebeb;
  text-align: right;
  height: 208px;
  width: 33.33%;
`;

const FooterFlex = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #635959;
  padding-top: 30px;
  color: white;
`;

const FooterContainer = styled('div')`
  display: flex;
  flex-wrap: no-wrap;
  width: 1200px;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Author = styled('footer')`
  width: 100%;
  text-align: center;
  color: white;
  padding: 15px;
  background-color: #4c2d19;
`;

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Footer;