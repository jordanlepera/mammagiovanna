import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import _uniqueId from 'lodash/uniqueId';
import { i18n, useTranslation, Link } from '../i18n';
import SelectCountry from './CountrySelect';

const Nav = () => {
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

  const Navlink = () => links.map(link => (
    <Link href={link.url} key={_uniqueId('navlink-')}>
      <NavLink disableRipple>{link.title}</NavLink>
    </Link>
  ));

  return (
    <>
      <NavBar>
        <NavToolbar>
          <HeaderLogo src="/logo-txt-vector-base.svg" alt="Mamma Giovanna's logo" />
          <NavlinkContainer>
            <Navlink />
          </NavlinkContainer>
          <SelectCountry lang={i18n.language} />
        </NavToolbar>
      </NavBar>
    </>
  );
};

Nav.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

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
