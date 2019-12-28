import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import _uniqueId from 'lodash/uniqueId';
import { Link, withTranslation } from '../i18n';
import SelectCountry from './CountrySelect';

const Nav = ({ t }) => {

  const links = [
    {
      title: t('homepage'),
      url: '/'
    },
    {
      title: t('menu'),
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
          <HeaderLogo src="/logo-txt-vector.png" alt="Mamma Giovanna's logo" />
          <NavlinkContainer>
            <Navlink />
          </NavlinkContainer>
          <SelectCountry />
        </NavToolbar>
      </NavBar>
    </>
  );
};

Nav.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Nav.propTypes = {
  t: PropTypes.func.isRequired,
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
  margin: 10px;
  @media (min-width: 501px) {
    margin-right: 20px;
  }
`;

export default withTranslation('common')(Nav);
