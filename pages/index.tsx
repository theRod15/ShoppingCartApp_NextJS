import Layout from '../src/components/Layout'
import ShowCase from '../src/components/ShowCase'
import { initStore } from '../src/store'
import { getInitialState } from '../src/actions'
import { ThunkDispatch } from 'redux-thunk'
import { InitialState, Store } from '../src/types'
import { Action, AnyAction } from 'redux'
import { NextPage } from 'next'

const Index: NextPage<{ store: Store }> = (props) => {
  console.log(props, 'from index')

  return (
    <Layout>
      <ShowCase />
    </Layout>
  )
}

Index.getInitialProps = async ({ req }) => {
  let localStore = initStore()

  await localStore.dispatch<ThunkDispatch<Store, any, InitialState>>(
    getInitialState()
  )

  const store = localStore.getState()

  return {
    store
  }
}
export default Index
