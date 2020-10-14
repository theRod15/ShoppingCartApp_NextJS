import React, { useState, createContext } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { FiShoppingCart } from 'react-icons/fi'
import { HiMenu } from 'react-icons/hi'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ResMenu from './ResMenu'

const NavWrapper = styled.div`
  background-color: lightgreen;
`
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  @media (min-width: 560px) {
    padding: 0;
  }
  .cart-icon {
    margin-left: auto;
    cursor: pointer;
    font-size: 1.35rem;
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
  .link-wrapper {
    display: none;
    @media (min-width: 560px) {
      display: flex;
    }
  }
`
export const StyledLink = styled.span`
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

export const NavContext = createContext<{
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}>({})
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartSwitchState = { isOpen, setIsOpen }
  const cartState = useSelector((state) => state.cart)
  return (
    <NavWrapper>
      <Container>
        <StyledNav>
          <ResMenu />
          <div className="link-wrapper">
            {Array(3)
              .fill('menu-item')
              .map((e, i) => {
                return i === 0 ? (
                  <Link href="/">
                    <StyledLink key={i}>Home</StyledLink>
                  </Link>
                ) : (
                  <StyledLink key={i}>{e}</StyledLink>
                )
              })}
          </div>

          <span className="cart-icon">
            <FiShoppingCart onClick={() => setIsOpen(!isOpen)} />
            {cartState.length > 0 && (
              <span className="cart-length">{cartState.length}</span>
            )}
            {isOpen && (
              <NavContext.Provider value={cartSwitchState}>
                <Cart />
              </NavContext.Provider>
            )}
          </span>
        </StyledNav>
      </Container>
    </NavWrapper>
  )
}

export default Nav
