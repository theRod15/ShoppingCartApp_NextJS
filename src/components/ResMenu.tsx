import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { StyledLink } from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import { ResponsiveMenuState, CartStateType } from '../types'

const StyledSpan = styled.span`
  display: block;
  position: relative;

  cursor: pointer;
  @media (min-width: 560px) {
    display: none;
  }
  .menu-icon {
    font-size: 1.35rem;
  }
`
const CustomStyledLink = styled((props) => <StyledLink {...props} />)`
  &&:hover {
    background: rgb(255 221 159);
  }
`
const StyledList = styled.ul`
  text-align: center;
  position: absolute;
  top: 1.5rem;
  width: 50vw;
  background: rgb(255 238 201);
  padding: 1rem;
  border-radius: 1rem;

  box-shadow: rgb(0 0 0 / 12%) 0px 0px 3px 3px;
  li  {
    border-bottom: 5px solid var(--res-menu-border-color);
  }
`
export default ({
  resMenuState,
  cartSwitchState
}: {
  resMenuState: ResponsiveMenuState
  cartSwitchState: CartStateType
}) => {
  return (
    <StyledSpan>
      <HiMenu
        className="menu-icon"
        onClick={() => {
          if (cartSwitchState.isCartOpen) {
            cartSwitchState.setIsCartOpen(!cartSwitchState.isCartOpen)
          }
          resMenuState.setIsResMenuOpen(!resMenuState.isResMenuOpen)
        }}
      />
      {resMenuState.isResMenuOpen && (
        <StyledList>
          {Array(3)
            .fill('menu-item')
            .map((e, i) => {
              if (i !== 0)
                return (
                  <li key={i}>
                    <CustomStyledLink>{e}</CustomStyledLink>
                  </li>
                )
              return (
                <li key={i}>
                  <Link href="/">
                    <CustomStyledLink>Home</CustomStyledLink>
                  </Link>
                </li>
              )
            })}
        </StyledList>
      )}
    </StyledSpan>
  )
}
