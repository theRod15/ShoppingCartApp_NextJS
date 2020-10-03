import React from 'react'

import styled from 'styled-components'
import Product from './Product'

const StyledDiv = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    flex-wrap: wrap;
  }
`

export default function ({ products }) {
  return (
    <StyledDiv>
      {products.map((productItem, i) => {
        return <Product {...productItem} key={i} />
      })}
    </StyledDiv>
  )
}
