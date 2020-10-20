import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface CartStateType {
  isCartOpen: boolean
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ResponsiveMenuState {
  isResMenuOpen: boolean
  setIsResMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CartAction extends Action<string> {
  id: number
}
export interface ProductAction extends Action<String> {
  payload: Product[]
}
export interface StockAction extends Action<String> {
  id: number
}
export interface InitialState extends Action<string> {
  data: Product[]
}
export interface Product {
  id: number
  description: string
  title: string
  price: number
  image: string
  category: string
}
export interface Stock {
  productId: number
  stock: number
}

export interface Cart {
  productId: number
  amount: number
}

export interface Store {
  products: Product[]
  cart?: Cart[]
  stock: Stock[]
}
