import React from 'react'
import { Container } from '../components/Container'
import { Provider } from 'react-redux'
import ShowCase from '../components/ShowCase'
import { useInitStore } from './lib'

export default {
  title: 'product ShowCase',
  component: ShowCase
}

export const ShowcaseWrapper = () => {
  const store = useInitStore()

  return (
    <Provider store={store}>
      <Container>
        <ShowCase />
      </Container>
    </Provider>
  )
}
