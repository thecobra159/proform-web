import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'

export const AboutUsWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.ProformLightGray};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-top: 0;
  padding: 64px 0;
  width: 100%;

  ${media.tablet} {
    margin: 0;
    padding: 32px 0;
  }
`

export const AboutUsTitle = styled.h2`
  text-transform: uppercase;

  ${media.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
  width: 80%;

  ${media.tablet} {
    flex-direction: column;
  }
`

export const AboutUsContentBox = styled.div`
  background-color: ${Theme.White};
  border-radius: 20px;
  padding: 32px;
  width: 40%;

  ${media.tablet} {
    max-width: 100%;
    padding: 24px;
    width: 100%;

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`

export const AboutUsProfiles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;

  ${media.tablet} {
    display: none;
  }
`

export const AboutUsProfilesMobile = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    min-height: 300px;
  }
`
