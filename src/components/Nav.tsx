import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const NavWrapper = styled.div`
  background-color: lightgreen;
`
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  .cart-icon {
    margin-left: auto;
    cursor: pointer;
    font-size: 1.3rem;
    position: relative;
    .cart-length {
      position: absolute;
      top: -25px;
      left: 15px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: white;
      background-color: red;
      font-size: 0.9rem;
      line-height: 1.3;
    }
  }
`
const StyledLink = styled.a`
  display: block;
  font-weight: bold;
  padding: 1.65rem 1rem;
  text-transform: capitalize;
  cursor: pointer;
  color: rgb(81, 82, 83);
  transition: background, color 300ms ease-in-out;
  &:hover {
    background: rgb(142 215 140);
  }
`

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartState = useSelector((state) => state.cart)
  return (
    <NavWrapper>
      <Container>
        <StyledNav>
          {Array(3)
            .fill('menu-item')
            .map((e, i) => {
              return <StyledLink key={i}>{e}</StyledLink>
            })}
          <span className="cart-icon">
            <FiShoppingCart onClick={() => setIsOpen(!isOpen)} />
            {cartState.length > 0 && (
              <span className="cart-length">{cartState.length}</span>
            )}
            {isOpen && <Cart />}
          </span>
        </StyledNav>
      </Container>
    </NavWrapper>
  )
}

export default Nav
