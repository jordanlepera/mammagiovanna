import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import _uniqueId from 'lodash/uniqueId';
import useTranslation from 'next-translate/useTranslation';
import Router from 'next-translate/Router';
// import { Link, withTranslation } from '../i18n';
import SelectCountry from './CountrySelect';

const Nav = props => {
  const { lang } = props;
  const { t } = useTranslation();

  const links = [
    {
      title: t('common:homepage'),
      url: '/'
    },
    {
      title: t('common:menu'),
      url: '/menu'
    }
  ];

  const routeTo = (url, lang) => {
    // console.log(lang);
    Router.pushI18n({ url: url, options: { lang: lang } });
    window.scrollTo(0, 0);
    // console.log(lang);
  };

  const Navlink = () => links.map(link => (
    <NavLink disableRipple key={_uniqueId('navlink-')} onClick={() => routeTo(link.url, lang)}>{link.title} </NavLink>
  ));

  return (
    <>
      <NavBar>
        <NavToolbar>
          <HeaderLogo src="/logo-txt-vector-base.svg" alt="Mamma Giovanna's logo" />
          <NavlinkContainer>
            <Navlink />
          </NavlinkContainer>
          <SelectCountry lang={lang} />
        </NavToolbar>
      </NavBar>
    </>
  );
};

// Nav.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// });

// Nav.getStaticProps = async ({ lang }) => {
//   return { props: { getStaticPropsWorks: true, lang } };
// };

Nav.propTypes = {
  lang: PropTypes.string,
};

const NavlinkContainer = styled.div`
  flex-grow: 1;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavLink = styled(Button)`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

const NavBar = styled(AppBar)`
  background-color: #4c2d19;
  @media (max-width: 500px) {
    min-height: 150px;
    padding: 20px;
  }
`;

const NavToolbar = styled(Toolbar)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const HeaderLogo = styled.img`
  width: 75px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
  @media (min-width: 501px) {
    margin-right: 20px;
  }
`;

export default Nav;
