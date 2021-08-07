import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

interface Props {
  children: React.ReactNode
  disabled?: boolean
  href: string
  id?: string
  target?: string
  external?: boolean
  inverted?: boolean
}

const Button = ({
  children,
  disabled = false,
  href = '',
  id = '',
  target = '_self',
  external = false,
  inverted = false,
}: Props) => {
  const ExternalButton = (): JSX.Element => (
    <StyledExternal
      disabled={disabled}
      href={href}
      id={id}
      inverted={inverted}
      target={target}
    >
      {children}
    </StyledExternal>
  )

  const InternalButton = (): JSX.Element => (
    <StyledInternal
      disabled={disabled}
      id={id}
      inverted={inverted}
      target={target}
      to={href}
    >
      {children}
    </StyledInternal>
  )

  return external ? <ExternalButton /> : <InternalButton />
}

const buttonStyles = css<{ disabled: boolean; inverted: boolean }>`
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
    `}
`

const StyledExternal = styled.a`
  ${buttonStyles}
`

const StyledInternal = styled(Link)`
  ${buttonStyles}
`

export default Button
