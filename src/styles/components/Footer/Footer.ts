import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

export const FooterWrapper = styled.div`
  background-color: ${Theme.Black};
  display: flex;
  height: 75vh;
  justify-content: center;
  padding: 80px 0;
  width: 100%;

  ${media.tablet} {
    height: 50vh;
  }

  ${media.smallTablet} {
    align-items: center;
    flex-direction: column;
    height: max-content;
    justify-content: unset;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`

export const FooterContent = styled.div`
  display: flex;
  width: 100%;

  ${media.smallTablet} {
    align-items: center;
    flex-direction: column;
  }
`

export const FooterLogo = styled(Image)`
  height: 260px;
  width: 260px;

  ${media.tablet} {
    height: 180px;
    width: 180px;
  }
`

export const FooterItems = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 5%;

  &:first-child {
    margin-left: 155px;
  }

  &:not(:first-child) {
    margin-left: 73px;
  }

  ${media.smallTablet} {
    align-items: center;
    &:first-child {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`

export const FooterLinks = styled.div`
  display: block;

  &:first-child {
    margin-top: 35px;
  }

  &:not(:first-child) {
    margin-top: 18px;
  }

  ${media.mobile} {
    align-items: center;
    font-size: 14px;
    line-height: 19px;

    &:first-child {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`

export const FooterItemTitle = styled.p`
  color: ${Theme.White};
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;

  ${media.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const FooterItem = styled.p`
  color: ${Theme.ProformLightGray};
  font-size: 18px;
  line-height: 24px;

  &:first-child {
    margin-top: 35px;
  }

  &:not(:first-child) {
    margin-top: 18px;
  }

  ${media.mobile} {
    align-items: center;
    font-size: 14px;
    line-height: 19px;

    &:first-child {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`

export const FooterItemLink = styled.a`
  color: ${Theme.ProformLightGray};
  font-size: 18px;
  line-height: 24px;

  & > * {
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
  }

  &:first-child {
    margin-top: 35px;
  }

  &:not(:first-child) {
    margin-top: 18px;
  }

  ${media.mobile} {
    align-items: center;
    font-size: 14px;
    line-height: 19px;

    & > * {
      font-size: 14px;
      line-height: 19px;
    }

    &:first-child {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`

export const FooterNote = styled.div`
  align-self: flex-start;
  bottom: 33px;
  color: ${Theme.ProformLightGray};
  font-size: 18px;
  line-height: 24px;

  ${media.smallTablet} {
    align-self: center;
    margin-top: 50px;
    text-align: center;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 22px;
  }
`
