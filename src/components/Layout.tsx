import Header from './Header'
import { Container } from './Container'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const Layout = ({ children }) => {
  const loadState = useSelector((state) => state.loading)
  return (
    <>
      <Header />
      <Container>{loadState ? <Loader /> : children}</Container>
      <Footer />
    </>
  )
}

export default Layout
