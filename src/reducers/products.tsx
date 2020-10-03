import { FILL_INITIAL_STATE } from '../constants'

export default (products = [], action) => {
  switch (action.type) {
    case FILL_INITIAL_STATE:
      return action.payload

    default:
      return products
  }
}
