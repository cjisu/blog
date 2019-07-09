import React from "react"
import styled from "styled-components"

const Header = styled.section`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  left:0;
  top: 0;
  right: 0;
  background: #ffffff;
  height: 50px;
  box-shadow: 1px 1px 54px 0 rgba(0, 0, 0, 0.04);
`

const HeadrItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 0 24px;
`;

export default () => (
  <Header>
      <HeadrItem>Blog</HeadrItem>
      <HeadrItem>About</HeadrItem>
  </Header>
)