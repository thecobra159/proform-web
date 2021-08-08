import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

export const ServiceCardWrapper = styled.div`
  border: 1px solid ${Theme.ProformLightGray};
  border-radius: 15px;
  box-shadow: 0 3px 6px ${Theme.ProformGreen};
  display: flex;
  flex-direction: column;
  height: 623px;
  overflow: hidden;
  transition: all 0.5s ease;
  width: 398px;

  &:hover {
    box-shadow: 0 9px 18px ${Theme.ProformGreen};

    img {
      transform: scale(1.3);
    }
  }

  &:not(:nth-child(0)) {
    margin-top: 24px;
  }

  ${media.smallTablet} {
    max-width: 100%;

    &:first-child {
      margin-top: 0;
    }

    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`

export const ServiceCardImageContainer = styled.div`
  border-radius: 15px 15px 0 0;
  height: 225px;
  overflow: hidden;
`

export const ServiceCardImage = styled(Image)`
  border-radius: 15px 15px 0 0;
  height: 225px;
  object-fit: cover;
  transition: all 0.5s ease;
  width: 100%;
`

export const ServiceCardContent = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px 28px;
`

export const ServiceCardTitle = styled.p`
  color: ${Theme.ProformGreen};
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  width: 80%;

  ${media.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const ServiceCardItems = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;

  ${media.mobile} {
    margin-top: 12px;
  }
`

export const ServiceCardItem = styled.p`
  font-size: 16px;
  line-height: 22px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;

    &:not(:first-child) {
      margin-top: 4px;
    }
  }
`
