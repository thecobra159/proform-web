import styled from 'styled-components'
import Image from '@/components/Image/Image'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'

export const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 250px;
  text-align: center;
  width: 125px;

  ${media.mobile} {
    margin-right: 100%;
    padding: 0 25px;
    width: 100%;
  }
`

export const ProfileImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
`

export const ProfileImage = styled(Image)`
  height: 100%;
  transition: all 0.5s;
  width: 100%;

  &:hover {
    transform: scale(1.3);
  }
`

export const ProfileName = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 16px;
`

export const ProfileOffice = styled.p`
  font-size: 12px;
  font-style: italic;
  line-height: 16px;
  margin-top: 4px;
  text-transform: uppercase;
`

export const ProfileLinkedin = styled.div`
  cursor: pointer;
  height: 16px;
  margin-top: 8px;
  width: 16px;

  svg {
    height: 16px;
    width: 16px;
    fill: ${Theme.Gray};
    transition: all 0.8s;
  }

  &:hover {
    svg {
      fill: ${Theme.LinkedinBlue};
    }
  }

  ${media.tablet} {
    svg {
      fill: ${Theme.LinkedinBlue};
    }
  }
`
