import styled from 'styled-components'
import { media } from '@/styles/GlobalStyles'

export const OurServicesWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 64px 0;
  width: 100%;

  ${media.tablet} {
    padding: 32px 0;
  }
`

export const OurServicesTitle = styled.h2`
  text-transform: uppercase;

  ${media.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const OurServicesText = styled.p`
  font-size: 32px;
  line-height: 32px;
  margin-top: 43px;
  text-align: center;
  width: 55%;

  ${media.tablet} {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    width: 80%;
  }
`

export const OurServicesCardsContainer = styled.div`
  -webkit-flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 56px;
  width: 80%;

  ${media.smallTablet} {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`
