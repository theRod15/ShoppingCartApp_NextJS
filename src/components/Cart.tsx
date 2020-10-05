import React from 'react'
import styled from 'styled-components'
import CarItem from './CartItem'
import { connect } from 'react-redux'

import { selectProductItem, computeTotalCart } from '../util'
const StyledDiv = styled.div`
  padding: 2rem;
  position: absolute;
  top: 2rem;
  border-radius: 1rem;
  right: 0;
  min-width: 400px;
  background: rgb(240 249 244);
  box-shadow: #aabdb4 0px 0px 6px 1px;
  max-width: 80vh;
  overflow: scroll;
  .result {
    padding-left: 2rem;
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(75 73 73);
    .result__total {
      text-transform: uppercase;
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`
const StyledDivEmpyCart = styled.div`
  padding: 2rem;
  position: absolute;
  top: 2rem;
  right: 0;
  min-width: 400px;
  background: rgb(240 249 244);
  text-align: center;
  border-radius: 0.75rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(138 145 141);
  letter-spacing: 1px;
  box-shadow: #aabdb4 0px 0px 6px 1px;
`
const StyledUl = styled.ul``
const Cart = ({ state }) => {
  console.log(state(), 'car state')

  return state().cart.length ? (
    <StyledDiv>
      <StyledUl>
        {state().cart.map((cartItem, i) => {
          const product = selectProductItem(
            state().products,
            cartItem.productId
          )
          return <CarItem product={product} key={i} cartItem={cartItem} />
        })}
      </StyledUl>
      <div className="result">
        <p>
          <span className="result__total">total:</span>{' '}
          {computeTotalCart(state())}
        </p>
      </div>
    </StyledDiv>
  ) : (
    <StyledDivEmpyCart>
      <p>Your cart is empty</p>
    </StyledDivEmpyCart>
  )
}

const mapStateToProps = (state) => {
  return {
    state() {
      return state
    }
  }
}

export default connect(mapStateToProps)(Cart)
