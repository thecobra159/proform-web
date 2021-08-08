import styled, { css, keyframes } from 'styled-components'
import { Theme } from '@/styles/Theme'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

interface IHeader {
  isScrolled?: boolean
  isMobileMenuOpen?: boolean
}

const showMobileMenuOpen = keyframes`
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 80px;
    opacity: 1;
  }
`

function headerStyles({ isScrolled, isMobileMenuOpen }: IHeader) {
  if (isScrolled || isMobileMenuOpen) {
    return css`
      background-color: ${Theme.White};
      box-shadow: 0 3px 6px ${Theme.ProformGreen};
      opacity: 0.8;
    `
  } else {
    return css`
      background-color: ${Theme.Transparent};
      box-shadow: none;
    `
  }
}

export const HeaderWrapper = styled.nav<IHeader>`
  ${headerStyles};
  -moz-transition: position 10s;
  -ms-transition: position 10s;
  -o-transition: position 10s;
  -webkit-transition: all 0.5s ease;
  display: flex;
  height: 122px;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 10;

  ${media.tablet} {
    height: 80px;
  }

  ${media.mobile} {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const HeaderLogo = styled(Image)`
  max-height: 122px;
  max-width: 122px;

  ${media.tablet} {
    max-height: 80px;
    max-width: 80px;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 360px;

  ${media.mobile} {
    display: none;
  }
`

export const HeaderMenuItem = styled.a`
  font-weight: bold;

  &.active {
    color: ${Theme.ProformGreen};
  }

  ${media.mobile} {
    color: ${Theme.Black};
    margin-top: 15px;
  }
`

export const HeaderMenuMobile = styled.div`
  display: none;
  transition: ease-in-out 0.5s;

  ${media.mobile} {
    display: block;
  }
`

export const HeaderMenuMobileContent = styled.div<IHeader>`
  align-items: center;
  background-color: ${Theme.White};
  display: none;
  flex-direction: column;
  padding: 15px;
  position: fixed;
  width: 100%;

  ${media.mobile} {
    animation: ${showMobileMenuOpen} 0.5s linear forwards;
    display: flex;
  }
`
