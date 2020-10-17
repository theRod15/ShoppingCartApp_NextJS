import Axios from 'axios'
import {
  FILL_INITIAL_STATE,
  INCREMENT_AMOUNT,
  DECREMENT_AMOUNT,
  INCREMENT_STOCK,
  DECREMENT_STOCK,
  CHECKOUT,
  REMOVE_PRODUCT,
  CART_TOTAL,
  START_LOADING,
  END_LOADING
} from '../constants'
import { selectIdItem } from '../util'

import { CartAction, Product } from '../types'
import { Dispatch, Action, AnyAction, ActionCreator } from 'redux'

const incrementStock: (id: number) => CartAction = (id) => ({
  type: INCREMENT_STOCK,
  id
})

const decrementStock: (id: number) => CartAction = (id) => ({
  type: DECREMENT_STOCK,
  id
})

const incrementAmount: (id: number) => CartAction = (id) => ({
  type: INCREMENT_AMOUNT,
  id
})

const decrementAmount: (id: number) => CartAction = (id) => ({
  type: DECREMENT_AMOUNT,
  id
})

export const getInitialState = () => async (dispatch) => {
  try {
    const { data }: { data: { products: Product[] } } = await Axios.get(
      'https://fakestoreapi.com/products'
    )
    console.log(data, 'initial state ')

    dispatch({ type: FILL_INITIAL_STATE, payload: data })
  } catch (error) {
    console.log('Network error', error)
  }
}

export const checkOut: () => Action<string> = () => ({ type: CHECKOUT })

export const incrementAction = (id) => (dispatch, getState) => {
  const { stock } = getState()
  if (selectIdItem(stock, id).stock > 0) {
    console.log('action-in')
    dispatch(decrementStock(id))
    dispatch(incrementAmount(id))
  }
}
export const decrementAction = (id) => (dispatch, getState) => {
  const { cart } = getState()
  if (selectIdItem(cart, id) && selectIdItem(cart, id).amount > 0) {
    dispatch(incrementStock(id))
    dispatch(decrementAmount(id))
  }
}

export const removeProduct: ActionCreator<Action<string>> = (id) => ({
  type: REMOVE_PRODUCT,
  id
})
export const startLoading: ActionCreator<Action<string>> = () => ({
  type: START_LOADING
})
export const endLoading: ActionCreator<Action<string>> = () => ({
  type: END_LOADING
})
