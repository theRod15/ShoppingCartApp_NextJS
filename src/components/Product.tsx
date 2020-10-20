import React, { FunctionComponent } from 'react'

import styled from 'styled-components'
import { incrementAction } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectIdItem } from '../util'
import Link from 'next/link'
import { Cart, Product as ProductT } from '../types'

const StyledDiv = styled.div`
  text-align: center;
  background: rgb(250 251 253);
  padding: 1rem 0;
  .price {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
  }
  .detail-button-wrapper {
    text-align: left;
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

const DetailButton = styled.button`
  margin: 2rem 0 0 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  background: rgb(255 179 41);
  color: hsl(0deg 1% 15%);
`
const Product: FunctionComponent<ProductT> = ({
  id,
  title,
  price,
  description,
  image
}) => {
  const dispatch = useDispatch()
  const cartState: Cart[] = useSelector((state) => state.cart)
  return (
    <ColDiv>
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <ImgWrapper>
          <img src={image} />
        </ImgWrapper>
        <p className="price">{price.toFixed(2) + ' €'}</p>
        <div className="btn-wrapper">
          <StyledButton
            onClick={() => {
              const product: Cart = selectIdItem(cartState, id)
              if (product) return
              dispatch(incrementAction(id))
            }}
          >
            add to cart
          </StyledButton>
        </div>
        <div className="detail-button-wrapper">
          <DetailButton>
            <Link href={`detail/${id}`}>detail page</Link>
          </DetailButton>
        </div>
      </StyledDiv>
    </ColDiv>
  )
}

export default Product
