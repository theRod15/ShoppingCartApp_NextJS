import stock from './stock'
import cart from './cart'
import products from './products'

import { combineReducers } from 'redux'
import loading from './loading'

const store = combineReducers({ cart, stock, products, loading })
export default store
