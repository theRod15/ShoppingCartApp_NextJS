import '../styles/globals.css'
import { Provider } from 'react-redux'
import { initStore } from '../src/store'
import { useEffect } from 'react'
import { getInitialState, startLoading, endLoading } from '../src/actions'
import { useClientStore } from '../src/util'

function MyApp({ Component, pageProps }) {
  console.log('global store from app', pageProps.store)
  return (
    <Provider store={initStore(pageProps.store)}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
