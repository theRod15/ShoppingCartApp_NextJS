import React, { useEffect, useState } from 'react'
import { getInitialState } from '../actions'
import { Container } from '../components/Container'

import ShowCase from '../components/ShowCase'

/* import store from '../../data/products' */
import store from '../store'
export default {
  title: 'product ShowCase',
  component: ShowCase
}

export const ShowcaseWrapper = () => {
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    ;(async () => {
      await store.dispatch(getInitialState())
      console.log('initial state', store.getState())
      setState(store.getState())
    })()
  }, [])
  return (
    <Container>
      <ShowCase products={state.products} />
    </Container>
  )
}
