import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../src/store'
import { useEffect } from 'react'
import { getInitialState, startLoading, endLoading } from '../src/actions'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ;(async () => {
      store.dispatch(startLoading())
      await store.dispatch(getInitialState())
      store.dispatch(endLoading())
    })()
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
