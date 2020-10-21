import Layout from '../src/components/Layout'
import ShowCase from '../src/components/ShowCase'
import { initStore } from '../src/store'
import { getInitialState } from '../src/actions'
import { ThunkDispatch } from 'redux-thunk'
import { InitialState, Store } from '../src/types'
import { Action, AnyAction } from 'redux'
import { NextPage } from 'next'
import { makeStore, serverStore } from '../src/util'

const Index: NextPage = () => {
  return (
    <Layout>
      <ShowCase />
    </Layout>
  )
}

Index.getInitialProps = async ({ req }) => {
  const store = await makeStore()

  return {
    store
  }
}
export default Index
