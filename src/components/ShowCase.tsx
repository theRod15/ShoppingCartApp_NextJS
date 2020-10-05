import React from 'react'

import styled from 'styled-components'
import Product from './Product'
import { connect } from 'react-redux'

const StyledDiv = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;

    align-items: center;
    flex-wrap: wrap;
  }
`

const ShowCase = ({ mapProducts }) => {
  console.log(mapProducts(), 'from map products')

  return (
    <StyledDiv>
      {mapProducts().map((productItem, i) => {
        return <Product {...productItem} key={i} />
      })}
    </StyledDiv>
  )
}

const mapStateToProps = (state) => {
  return {
    mapProducts() {
      return state.products
    }
  }
}

export default connect(mapStateToProps)(ShowCase)
