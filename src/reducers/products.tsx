import { Reducer } from 'redux'
import { FILL_INITIAL_STATE } from '../constants'
import { Product, ProductAction } from '../types'

const productReducer: Reducer<Product[], ProductAction> = (
  products = [],
  action
) => {
  switch (action.type) {
    case FILL_INITIAL_STATE:
      return action.payload

    default:
      return products
  }
}

export default productReducer
