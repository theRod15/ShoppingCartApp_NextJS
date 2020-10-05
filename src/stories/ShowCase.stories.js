import React, { useEffect, useState } from 'react'
import { getInitialState } from '../actions'
import { Container } from '../components/Container'
import { Provider, useDispatch } from 'react-redux'
import ShowCase from '../components/ShowCase'

/* import store from '../../data/products' */
import store from '../store'

export default {
  title: 'product ShowCase',
  component: ShowCase
}

export const ShowcaseWrapper = () => {
  useEffect(() => {
    ;(async () => {
      await store.dispatch(getInitialState())
      console.log('initial state', store.getState())
    })()
  }, [])
  return (
    <Provider store={store}>
      <Container>
        <ShowCase />
      </Container>
    </Provider>
  )
}
