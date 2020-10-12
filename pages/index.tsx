import Layout from '../src/components/Layout'
import ShowCase from '../src/components/ShowCase'
import { initStore } from '../src/store'
import { getInitialState } from '../src/actions'

const Index = (props) => {
  console.log(props, 'from index')

  return (
    <Layout>
      <ShowCase />
    </Layout>
  )
}

Index.getInitialProps = async ({ req }) => {
  let localStore = initStore()

  await localStore.dispatch(getInitialState())

  const store = localStore.getState()

  return {
    store
  }
}
export default Index
