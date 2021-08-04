import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyles from '@styles/globalStyles'

import Head from '@components/Head'
import Container from '@grid/Container'

interface Props {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: Props) => {
  return (
    <App>
      <GlobalStyles />
      <Head pathname={location.pathname} />
      <ThemeProvider theme={theme}>
        <Container>{children}</Container>
      </ThemeProvider>
    </App>
  )
}

export default Layout

const App = styled.div``
