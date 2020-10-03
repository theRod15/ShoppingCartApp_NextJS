import React from 'react'

import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  @media screen (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}
