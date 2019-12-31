import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuSection = props => {
  const { name, ing, price } = props;

  return (
    <Article>
      <Line>
        <Name>
          {name}
        </Name>
        <Price>
          {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)}
        </Price>
      </Line>
      <Description>
        {ing}
      </Description>
      {props.children}
    </Article>
  );
};

const Article = styled.div`
  margin: 10px;
  color: #3D3D3D;
`;

const Line = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-weight: bold;
  border-bottom: 1px solid #3D3D3D;
`;

const Price = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #3D3D3D;
  text-align: right;
`;

const Description = styled.div`
  font-style: italic;
`;

MenuSection.propTypes = {
  name: PropTypes.string,
  ing: PropTypes.string,
  price: PropTypes.number,
  children: PropTypes.node
};

export default MenuSection;