import styled from 'styled-components'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

export const BannerWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const BannerImage = styled(Image)`
  height: 100vh;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`

export const BannerContent = styled.div`
  height: max-content;
  margin-left: 10%;
  margin-top: 18%;
  position: relative;

  ${media.tablet} {
    margin-top: 35%;
    max-width: 80%;
  }

  ${media.mobile} {
    margin-top: 50%;
  }
`

export const BannerTitle = styled.h1`
  max-width: 785px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 43px;
  }
`

export const BannerSubtitle = styled.p`
  margin-top: 20px;
  max-width: 440px;

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
    max-width: 70%;
  }
`
