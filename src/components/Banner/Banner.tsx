import {
  BannerWrapper,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
} from '@/styles/components/Banner/Banner'

export default function Banner(): JSX.Element {
  return (
    <BannerWrapper id="home">
      <BannerImage alt="hero_banner" src="assets/banner_2.png" />
      <BannerContent>
        <BannerTitle>Mussum Ipsum, cacilds vidis litro abertis.</BannerTitle>
        <BannerSubtitle>
          Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris
          qui num significa nadis i pareci latim.
        </BannerSubtitle>
      </BannerContent>
    </BannerWrapper>
  )
}
