import React from 'react'

import styled, { css } from 'styled-components'

interface Props {
  equalHeight?: boolean
  noGutter?: boolean
  verticalGutter?: boolean
  children: React.ReactNode
  className?: string
}

const Row = ({
  children,
  equalHeight = false,
  noGutter = false,
  verticalGutter = false,
  className,
}: Props) => (
  <StyledRow
    equalHeight={equalHeight}
    noGutter={noGutter}
    verticalGutter={verticalGutter}
    className={className}
  >
    {children}
  </StyledRow>
)

const StyledRow = styled.div<{
  equalHeight?: boolean
  noGutter?: boolean
  verticalGutter?: boolean
}>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.gridGutter.md / 2}px;

  ${({ equalHeight }) =>
    equalHeight &&
    css`
      & > * {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-clip: content-box;

        & > * {
          flex-grow: 1;
          width: 100%;
        }
      }

      &::before,
      &::after {
        content: normal;
      }
    `}

  ${({ noGutter }) =>
    noGutter &&
    css`
      margin: 0 !important;

      > * {
        padding: 0;
      }
    `}
`

export default Row
