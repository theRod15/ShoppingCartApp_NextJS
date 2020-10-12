import '../styles/globals.css'
import { Provider } from 'react-redux'
import { initStore } from '../src/store'
import { useEffect } from 'react'
import { getInitialState, startLoading, endLoading } from '../src/actions'

function MyApp({ Component, pageProps }) {
  console.log(pageProps.store, 'pageprops from index')
  return (
    <Provider store={initStore(pageProps.store)}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
