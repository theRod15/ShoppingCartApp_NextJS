import React, { useContext } from 'react'
import styled from 'styled-components'
import { MdAddCircle } from 'react-icons/md'
import { HiMinusCircle } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { decrementAction, incrementAction, removeProduct } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { NavContext } from './Nav'
import { selectIdItem } from '../util'
import { CartStateType } from '../types'

const StyledLi = styled.li`
  padding: 1rem 1rem;
  @media (min-width: 450px) {
    padding: 1rem 2rem;
  }
  margin: 1rem 0;
  position: relative;
  background: rgb(212 238 212);
  border-radius: 0.5rem;
  .cart-items {
    display: flex;
    fex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    figure {
      max-width: 35px;
      img {
        height: 45px;
      }
    }
    .button-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 450px) {
        flex-direction: row;
      }
    }
    .cart-items__buttons {
      display: flex;
      margin: 0.5rem 1rem 0;
      @media (min-width: 450px) {
        margin: 0 1rem;
      }
      .units {
        margin: 0 0.5rem;
      }
    }
  }
  .action-icon {
    cursor: pointer;
  }
  .close-icon {
    position: absolute;
    top: 0.35rem;
    right: 0.35rem;
  }
`

const CartItem = ({ product, cartItem }) => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cart)
  const {
    isCartOpen,
    setIsCartOpen
  }: { isCartOpen: boolean; setIsCartOpen: (boolean) => void } = useContext<
    CartStateType
  >(NavContext as React.Context<CartStateType>)
  const addProduct = (id) => dispatch(incrementAction(id))
  const closeIfEmpty = () => {
    if (cartState.length === 1) {
      setIsCartOpen(!isCartOpen)
    }
  }

  const subtractProduct = (id) => {
    const product = selectIdItem(cartState, id)
    if (product.amount <= 1) return
    dispatch(decrementAction(id))
  }

  const removeCartItem = (id) => {
    dispatch(removeProduct(id))
    closeIfEmpty()
  }

  return (
    <StyledLi>
      <div className="cart-items">
        <div className="button-wrapper">
          <figure>
            <img src={product.image} alt="product-item" />
          </figure>
          <div className="cart-items__buttons">
            <MdAddCircle
              onClick={(e) => addProduct(product.id)}
              className="action-icon"
            />
            <span className="units">{cartItem.amount}</span>
            <HiMinusCircle
              onClick={(e) => subtractProduct(product.id)}
              className="action-icon"
            />
          </div>
        </div>

        <div className="cart-items__price">{`${(
          cartItem.amount * product.price
        ).toFixed(2)} €`}</div>
      </div>
      <AiFillCloseCircle
        className="close-icon"
        onClick={(e) => removeCartItem(product.id)}
      />
    </StyledLi>
  )
}

export default CartItem
