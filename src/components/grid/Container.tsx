import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.gridGutter.sm}px;
  position: relative;
  width: 100%;

  /* Spacing between sections */
  & > * {
    margin-bottom: ${({ theme }) => rem(theme.spacing.section.sm)} !important;

    ${({ theme }) => theme.media.lg} {
      margin-bottom: ${({ theme }) => rem(theme.spacing.section.lg)} !important;
    }
  }

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
