import styled from 'styled-components'
import { media } from '@/styles/GlobalStyles'
import { Theme } from '@/styles/Theme'
import Image from '@/components/Image/Image'

export const ContactUsWrapper = styled.div`
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

export const ContactUsTitle = styled.h2`
  text-transform: uppercase;

  ${media.tablet} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const ContactUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  width: 80%;

  ${media.tablet} {
    align-items: center;
    flex-direction: column;
  }
`

export const ContactUsBox = styled.div`
  align-items: flex-start;
  border: 1px solid ${Theme.ProformLightGray};
  border-radius: 15px;
  box-shadow: 0 3px 6px ${Theme.ProformGreen};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  width: 40%;

  ${media.tablet} {
    width: 60%;
  }

  ${media.mobile} {
    width: 100%;
  }
`

export const ContactUsBoxTitle = styled.h3`
  color: ${Theme.ProformGreen};
  font-size: 32px;
  font-weight: bold;
  line-height: 43px;

  ${media.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const ContactUsBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;

  &:nth-child(2) {
    margin-top: 96px;
  }

  ${media.tablet} {
    margin-top: 24px;

    &:nth-child(2) {
      margin-top: 48px;
    }
  }
`

export const ContactUsBoxItemTitle = styled.p`
  font-size: 16px;
  line-height: 22px;

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`

export const ContactUsBoxItemText = styled.p`
  font-size: 20px;
  line-height: 27px;

  ${media.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const ContactUsBoxSocialMedia = styled.div`
  display: flex;
`

export const ContactUsBoxSocialMediaLink = styled.a``

export const ContactUsBoxSocialMediaImage = styled(Image)`
  -webkit-filter: grayscale(100%);
  filter: gray(100%);
  height: 32px;
  margin-right: 16px;
  margin-top: 8px;
  opacity: 0.7;
  transition: all 0.5s ease;
  width: 32px;

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: none;
    opacity: 1;
  }

  ${media.tablet} {
    -webkit-filter: grayscale(0%);
    filter: none;
    opacity: 1;
  }
`

export const ContactUsFormWrapper = styled.div`
  width: 55%;

  ${media.tablet} {
    margin-top: 54px;
    width: 60%;
  }

  ${media.mobile} {
    width: 100%;
  }
`

export const ContactUsForm = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;
  width: 100%;
`

export const ContactUsFormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;

  ${media.mobile} {
    width: 100%;
  }
`
