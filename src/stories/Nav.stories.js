import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { Provider, useDispatch } from 'react-redux'

import { incrementAction } from '../actions'
import Header from '../components/Header'
import { useInitStore } from './lib'

export default {
  title: 'Complete Header',
  component: Header
}

export const SimpleNav = () => {
  const store = useInitStore()
  return (
    <Provider store={store}>
      <Header />
      <TestDispatcher />
    </Provider>
  )
}

const TestDispatcher = () => {
  const dispatch = useDispatch()
  const ButtonDispatcher = ({ id }) => (
    <button
      onClick={() => dispatch(incrementAction(id))}
    >{`add product ${id}`}</button>
  )
  let n = 1
  const idArr = []
  while (n < 10) {
    idArr.push(n)
    n += 1
  }
  return (
    <div className="test">
      {idArr.map((productId, i) => {
        return <ButtonDispatcher id={productId} key={i} />
      })}
    </div>
  )
}
