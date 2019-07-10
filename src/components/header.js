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
  height: 100px;
`

const HeadrItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 0 24px;
`;

const SelectedHeaderItem = styled(HeadrItem)`
  color: #FFAE00;
`

const UnSelectedHeaderItem = styled(HeadrItem)`
  color: #B9B9B9
`

export default () => (
  <Header>
      <SelectedHeaderItem>Blog</SelectedHeaderItem>
      <UnSelectedHeaderItem>About</UnSelectedHeaderItem>
  </Header>
)