import Header from './Header'
import { Container } from './Container'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import { FunctionComponent, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Store } from '../types'

const Layout: FunctionComponent = ({ children }) => {
  const loadState: boolean = useSelector((state) => state.loading)
  const router: NextRouter = useRouter()
  const store: Store = useSelector((state) => state)
  useEffect(() => {
    const serializeState = () => {
      console.log('serialize state')

      window.localStorage.setItem('store', JSON.stringify(store))
    }
    router.events.on('routeChangeStart', serializeState)

    return () => {
      router.events.off('routeChangeStart', serializeState)
    }
  }, [store])
  return (
    <>
      <Header />
      <Container>{loadState ? <Loader /> : children}</Container>
      <Footer />
    </>
  )
}

export default Layout
