import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'

export const ParallaxWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 75vh;
  justify-content: center;
  width: 100%;
`

export const ParallaxContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60%;

  ${media.smallTablet} {
    width: 80%;
  }
`

export const ParallaxIcon = styled.div`
  font-size: 32px;
  height: max-content;
  margin: 0 15px;
  opacity: 0.7;
  top: 0;

  &.end {
    align-self: end;
  }

  ${media.smallTablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const ParallaxPhrase = styled.div`
  color: ${Theme.Black};
  display: flex;
  font-size: 46px;
  font-style: italic;
  justify-content: space-around;
  line-height: 63px;
  text-align: center;

  ${media.smallTablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const ParallaxName = styled.div`
  color: ${Theme.ProformGreen};
  font-size: 32px;
  font-weight: bold;
  line-height: 43px;
  margin-top: 38px;

  ${media.smallTablet} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const ParallaxOffice = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-top: 10px;

  ${media.smallTablet} {
    font-size: 14px;
    line-height: 19px;
  }
`
