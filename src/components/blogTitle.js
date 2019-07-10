import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 169px;
  padding-left: 14vw;
  font-size: 36px;
`;

export default () => (
  <Wrapper>
    <span style={{color: "#FFAE00"}}>bl</span>
    <span style={{color: "#B9B9B9"}}>og</span>
  </Wrapper>
)