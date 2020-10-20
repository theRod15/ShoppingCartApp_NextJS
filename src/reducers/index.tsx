import stock from './stock'
import cart from './cart'
import products from './products'

import { Action, combineReducers, Reducer } from 'redux'
import loading from './loading'
import { Store } from '../types'

const storeReducer: Reducer<Store, Action<string>> = combineReducers({
  cart,
  stock,
  products,
  loading
})
export default storeReducer
