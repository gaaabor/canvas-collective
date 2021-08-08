import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

interface Props {
  children: React.ReactNode
  disabled?: boolean
  id?: string
  inverted?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const Button = ({
  children,
  onClick,
  disabled = false,
  id = '',
  inverted = false,
}: Props) => {
  return (
    <StyledButton
      disabled={disabled}
      id={id}
      inverted={inverted}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ disabled: boolean; inverted: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.black};
  border: none;
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  height: ${rem(48)};
  justify-content: center;
  padding: ${rem(12)} ${rem(36)};
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}

  ${({ inverted }) =>
    inverted &&
    css`
      background-color: ${({ theme }) => theme.palette.white};
      color: ${({ theme }) => theme.palette.black};
      border: 3px solid ${({ theme }) => theme.palette.black};
    `}
`

export default Button
