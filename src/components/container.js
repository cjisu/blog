import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 0 auto;
  background: red;
`

export default ({ children }) => (
  <Section className={`container`}>{children}</Section>
)