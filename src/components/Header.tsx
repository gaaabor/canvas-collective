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
  height: ${rem(90)};
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    height: ${rem(120)};
  }
`

const StyledLogo = styled(CompanyLogo)`
  width: ${rem(120)};

  ${({ theme }) => theme.media.lg} {
    width: ${rem(160)};
  }
`

const StyledCartIcon = styled(CartIcon)`
  ${size(32)};

  ${({ theme }) => theme.media.lg} {
    ${size(55)};
  }
`

export default Header
