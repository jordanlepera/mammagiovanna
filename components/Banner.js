import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <ImgBanner src="/sallev4.jpg" />
  );
};

const ImgBanner = styled.img`
  margin-top: 64px;
  width: 100%;
`;

export default Banner;