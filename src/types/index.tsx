import { Action, ActionCreator, Dispatch } from 'redux'

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

export interface Product {
  id: number
  description: string
  title: string
  price: number
  image: string
  category: string
}
