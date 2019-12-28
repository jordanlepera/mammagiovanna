import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTranslation } from '../i18n';

const Footer = ({ t }) => (
  <Author>
    © 2019 - Jordan Le Pera
  </Author>
);

const Author = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
  padding: 15px;
  background-color: #635959;
`;

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Footer);