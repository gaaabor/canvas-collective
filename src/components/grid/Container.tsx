import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => (
  <StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.gridGutter.sm}px;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    max-width: ${({ theme }) => theme.containerMaxWidth.sm}px;
  }

  ${({ theme }) => theme.media.md} {
    max-width: ${({ theme }) => theme.containerMaxWidth.md}px;
  }

  ${({ theme }) => theme.media.lg} {
    max-width: ${({ theme }) => theme.containerMaxWidth.lg}px;
  }

  ${({ theme }) => theme.media.xl} {
    max-width: ${({ theme }) => theme.containerMaxWidth.xl}px;
  }
`

export default Container
