import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import data from '../../data/products'
import cartReducer from '../reducers'

const { stock } = data

export function initStore(newState = { products: [], stock }) {
  return createStore(cartReducer, newState, applyMiddleware(thunk))
}
