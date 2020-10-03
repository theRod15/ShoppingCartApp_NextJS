import React from 'react'

import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  background: rgb(250 251 253);
  padding: 1rem 0;
  .price {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
  }
`
const ColDiv = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 50%;
  }
  @media (min-width: 1024px) {
    max-width: calc(100% / 3);
  }
`
const StyledTitle = styled.h1`
  font-size: 1.35rem;
  text-transform: capitalize;
  letter-spacing: 1.35px;
  line-height: 1.35;
`
const StyledButton = styled.button`
  border-radius: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: rgb(78 223 168);
  letter-spacing: 1px;
  font-size: 1.05rem;
  font-weight: bold;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgb(67 191 144);
  }
`
const ImgWrapper = styled.figure`
  display: block;
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  img {
    max-width: 100%;
    height: 100%;
  }
`
const Product = ({ id, title, price, description, image }) => {
  return (
    <ColDiv>
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <ImgWrapper>
          <img src={image} />
        </ImgWrapper>
        <p className="price">{price + ' €'}</p>
        <div className="btn-wrapper">
          <StyledButton>add to cart</StyledButton>
        </div>
      </StyledDiv>
    </ColDiv>
  )
}

export default Product
