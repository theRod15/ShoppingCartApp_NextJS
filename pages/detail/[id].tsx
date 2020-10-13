import Layout from '../../src/components/Layout'
import Axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  margin: 2rem 0;
  .product-info {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`
const Col = styled.div`
  padding: 2rem;
  margin: 0 1rem;
  @media (min-width: 768px) {
    margin: 1rem 0 0;
    width: 50%;
  }

  .product-info__description {
    font-size: 1.8rem;
    line-height: 1.6;
  }
  .product-info__price {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 5rem;
  }
  @media (min-width: 768px) {
    margin: 1rem 0 0;
    width: 50%;
  }
  figure {
    text-align: center;
    margin-top: 3rem;
  }
`
const AddCartButton = styled.button`
  margin-top: 5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 1.25rem;
  background: rgb(255 183 94);
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
`

const Detail = ({ data }) => {
  console.log(data, 'detail data from component')

  return (
    <Layout>
      <Wrapper>
        <Col className="product-showcase">
          <h1>{data.title}</h1>
          <figure>
            <img src={data.image} alt="" />
          </figure>
        </Col>
        <Col className="product-info">
          <p className="product-info__description">{data.description}</p>
          <div className="product-info__price">{`${data.price.toFixed(
            2
          )} €`}</div>
          <div className="button-wrapper">
            <AddCartButton>add to cart</AddCartButton>
          </div>
        </Col>
      </Wrapper>
    </Layout>
  )
}

Detail.getInitialProps = async ({ req, query }) => {
  const { data } = await Axios.get(
    `https://fakestoreapi.com/products/${query.id}`
  )
  console.log(data, 'data from detail')

  return { data }
}

export default Detail
