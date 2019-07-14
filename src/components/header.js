import React from "react"
import styled from "styled-components"

const Header = styled.section`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  padding-left: 14vw;
  background: #ffffff;
  z-index: 1;
`

const HeadrItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 74px;
`

const SelectedHeaderItem = styled(HeadrItem)`
  color: #ffae00;
`

const UnSelectedHeaderItem = styled(HeadrItem)`
  color: #b9b9b9;
`

export default () => (
  <Header>
    <SelectedHeaderItem>Blog</SelectedHeaderItem>
    <UnSelectedHeaderItem>Project</UnSelectedHeaderItem>
    <UnSelectedHeaderItem>About</UnSelectedHeaderItem>
  </Header>
)
