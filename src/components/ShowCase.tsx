import React from 'react'

import styled from 'styled-components'
import Product from './Product'
import { useSelector } from 'react-redux'

const StyledDiv = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    flex-wrap: wrap;
  }
`

const ShowCase = () => {
  const products = useSelector((state) => state.products)

  return (
    <StyledDiv>
      {products.map((productItem, i) => {
        return <Product {...productItem} key={i} />
      })}
    </StyledDiv>
  )
}

export default ShowCase
