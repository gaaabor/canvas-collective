import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyles from '@styles/globalStyles'

import Head from '@components/Head'
import Header from '@components/Header'
import Container from '@grid/Container'

interface Props {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: Props) => (
  <>
    <GlobalStyles />
    <Head pathname={location.pathname} />
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  </>
)

export default Layout
