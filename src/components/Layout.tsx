import Header from './Header'
import { Container } from './Container'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const loadState = useSelector((state) => state.loading)
  const router = useRouter()
  const store = useSelector((state) => state)
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
