import styled, { css } from 'styled-components'
import { Theme } from '@/styles/Theme'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

interface IHeader {
  isScrolled?: boolean
}

function headerStyles({ isScrolled }: IHeader) {
  if (isScrolled) {
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
`

export const HeaderMenuMobile = styled.div`
  display: none;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`

export const HeaderMenuBar = styled.div`
  background-color: #333;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  width: 35px;

  &:first-child {
    .change {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
  }

  &:nth-child(1) {
    .change {
      opacity: 0;
    }
  }

  &:last-child {
    .change {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`
