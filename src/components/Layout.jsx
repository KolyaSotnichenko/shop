import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/system'

const Layout = ({children}) => {
  return (
    <Container maxWidth="lg" sx={{margin: '50px auto'}}>
        <Header/>
        {children}
        <Footer />
    </Container>
  )
}

export default Layout