import { Action, Reducer } from 'redux'
import { START_LOADING, END_LOADING } from '../constants'

const loading: Reducer<boolean, Action<string>> = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true
    case END_LOADING:
      return false

    default:
      return false
  }
}

export default loading
