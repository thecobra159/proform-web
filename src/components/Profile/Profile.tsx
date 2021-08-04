import {
  ProfileImage,
  ProfileImageWrapper,
  ProfileLinkedin,
  ProfileName,
  ProfileOffice,
  ProfileWrapper,
} from '@/styles/components/Profile/Profile'
import Link from 'next/link'

import LinkedinLogo from '../../../public/assets/logo/linkedin.svg'

interface IProfile {
  imgAlt: string
  imgSrc: string
  name: string
  office: string
  linkedin: string
}

export default function Profile({
  imgAlt,
  imgSrc,
  name,
  office,
  linkedin,
}: IProfile): JSX.Element {
  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImage alt={imgAlt} src={imgSrc} />
      </ProfileImageWrapper>
      <ProfileName>{name}</ProfileName>
      <ProfileOffice>{office}</ProfileOffice>
      <ProfileLinkedin>
        <Link href={linkedin} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <LinkedinLogo width="16px" height="16px" />
          </a>
        </Link>
      </ProfileLinkedin>
    </ProfileWrapper>
  )
}
