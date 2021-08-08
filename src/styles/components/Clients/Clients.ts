import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'
import Image from '@/components/Image/Image'

export const ClientsWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.ProformGreen};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 64px 0;
  width: 100%;
`

export const ClientsTitle = styled.h2`
  color: ${Theme.White};
  text-transform: uppercase;

  ${media.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const ClientsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 43px;
  width: 80%;
`

export const ClientLogo = styled(Image)`
  -webkit-filter: grayscale(100%);
  filter: gray(100%);
  height: 112px;
  margin: 15px;
  opacity: 0.7;
  transition: all 0.5s ease;
  width: 254px;

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: none;
    opacity: 1;
  }

  ${media.tablet} {
    -webkit-filter: grayscale(0%);
    filter: gray(0%);
    opacity: 1;
  }

  ${media.mobile} {
    height: 55px;
    width: 135px;
  }
`
