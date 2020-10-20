import React, { FunctionComponent } from 'react'

import styled from 'styled-components'
import Product from './Product'
import { useSelector } from 'react-redux'
import { Product as ProductT } from '../types'
const StyledDiv = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    flex-wrap: wrap;
  }
`

const ShowCase: FunctionComponent = () => {
  const products: ProductT[] = useSelector((state) => state.products)

  return (
    <StyledDiv>
      {products.map((productItem, i) => {
        return <Product {...productItem} key={i} />
      })}
    </StyledDiv>
  )
}

export default ShowCase
