import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuSection = props => {
  const { title } = props;
  return (
    <Section>
      <Title>
        {title}
      </Title>
      {props.children}
    </Section>
  );
};

const Section = styled.div`
  margin: 10px;
  padding: 20px;
  color: #3D3D3D;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
`;

MenuSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default MenuSection;