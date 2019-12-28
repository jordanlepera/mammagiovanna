import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const HomePanel = props => {
  const { icon, title } = props;
  return (
    <Panel elevation={0}>
      {icon}
      <Title>{title}</Title>
      <PanelContent>
        {props.children}
      </PanelContent>
    </Panel>
  );
};

const Title = styled.div`
  font-size: 2em;
  font-weight: bolder;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 2em;
  }
`;

const PanelContent = styled.div`
  font-size: 1.5em;
`;

const Panel = styled(Paper)`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #3D3D3D;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
  transform: scale(1) translateY(0px);
  z-index: 10;
  &:hover {
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.10);
    transform: scale(1.01) translateY(-3px);
    z-index: 1000;
  }
`;

HomePanel.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default HomePanel;