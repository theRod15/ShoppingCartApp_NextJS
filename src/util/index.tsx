import { Product, Store } from '../types'

import { initStore } from '../store'
import { getInitialState } from '../actions'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

export const selectIdItem: <T extends { productId: number }>(
  stateSlice: T[],
  id: number
) => T = (stateSlice, id) => stateSlice.find((e) => e.productId === id)

export const selectProductItem: (products: Product[], id: number) => Product = (
  products,
  id
) => products.find((e) => e.id === id)

export function pageButtons(data, itemsPerPage = 6) {
  const totalProducts = data.length
  const totalPages =
    totalProducts % itemsPerPage === 0
      ? totalProducts / itemsPerPage
      : Math.floor(totalProducts / itemsPerPage + 1)
  return totalPages
}

export function paginate(data, page, itemsPerPage = 6) {
  const sliceEnd = itemsPerPage * page
  const sliceStart = sliceEnd - itemsPerPage
  const products = data.slice(sliceStart, sliceEnd)
  return products
}

export function padDigits(pattern, number) {
  const totalDigits = pattern.length
  const digitsDiff = totalDigits - number.length
  if (digitsDiff >= 0) return number
  const nbs = '&nbs'
  return nbs.repeat(2) + number
}
export const computeTotalCart: (store: Store) => string = (store) => {
  const total = store.cart.reduce((computed, current) => {
    const product = selectProductItem(store.products, current.productId)

    return computed + product.price * current.amount
  }, 0)

  return `${total.toFixed(2)} €`
}

export const useClientStore: () => Store = () => {
  return JSON.parse(localStorage.getItem('store'))
}

export const serverStore: () => Promise<any> = async () => {
  const store = initStore()

  await store.dispatch<ThunkDispatch<Store, any, Action<string>>>(
    getInitialState()
  )

  return store.getState()
}

export const makeStore: () => Promise<Store> = async () => {
  let store
  if (typeof window !== 'undefined') {
    return (store = useClientStore())
  }
  store = await serverStore()
  return store
}
