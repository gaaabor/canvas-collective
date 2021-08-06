import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem, size } from 'polished'

import CompanyLogo from '@assets/svg/logo.svg'
import CartIcon from '@assets/svg/cart.svg'

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledCartIcon />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => theme.border.thick};
  display: flex;
  height: ${rem(120)};
  justify-content: space-between;
  margin-bottom: ${rem(60)};
`

const StyledLogo = styled(CompanyLogo)`
  width: ${rem(160)};
`

const StyledCartIcon = styled(CartIcon)`
  ${size(54)};
`

export default Header
