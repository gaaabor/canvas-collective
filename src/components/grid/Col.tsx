import React from 'react'

import styled, { css } from 'styled-components'

interface Props {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  children?: React.ReactNode
  className?: string
  order?: number
}

const Col = ({
  children,
  className,
  lg,
  md,
  sm,
  xl,
  xs = 12,
  order,
}: Props) => (
  <StyledCol
    lg={lg}
    md={md}
    sm={sm}
    xl={xl}
    xs={xs}
    order={order}
    className={className}
  >
    {children}
  </StyledCol>
)

const getColWidth = (span: number): string => {
  return `${(span / 12) * 100}%`
}

const getResponsiveCol = (span: number): string => {
  return `
    flex: 0 0 ${getColWidth(span)};
    max-width: ${getColWidth(span)};
  `
}

const StyledCol = styled.div<{
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  order?: number
}>`
  min-height: 1px;
  padding: 0 ${({ theme }) => theme.gridGutter.md / 2}px;
  position: relative;
  width: 100%;

  ${({ xs }) =>
    xs &&
    css`
      ${getResponsiveCol(xs)}
    `}

  ${({ theme }) => theme.media.sm} {
    ${({ sm }) =>
      sm &&
      css`
        ${getResponsiveCol(sm)}
      `}
  }

  ${({ theme }) => theme.media.md} {
    ${({ md }) =>
      md &&
      css`
        ${getResponsiveCol(md)}
      `}
  }

  ${({ theme }) => theme.media.lg} {
    ${({ lg }) =>
      lg &&
      css`
        ${getResponsiveCol(lg)}
      `}
  }

  ${({ theme }) => theme.media.xl} {
    ${({ xl }) =>
      xl &&
      css`
        ${getResponsiveCol(xl)}
      `}
  }

  @media (max-width: 992px) {
    order: ${({ order }) => order};
  }
`

export default Col
