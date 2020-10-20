import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import Nav from './Nav'

const StyledHeader = styled.header`
  text-align: center;
  background-color: lightgreen;
  .header-wrapper {
    padding: 3rem 0;
  }
  h1 {
    font-size: 5rem;
    letter-spacing: 1px;
    color: rgb(104 168 104);
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 8rem;
    }
  }
`

const Header: FunctionComponent = () => (
  <StyledHeader>
    <Container>
      <div className="header-wrapper">
        <h1>pc comp</h1>
      </div>
    </Container>
    <Nav />
  </StyledHeader>
)

export default Header
