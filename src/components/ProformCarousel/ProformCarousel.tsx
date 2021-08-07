import { CarouselWrapper } from '@/styles/components/ProformCarousel/ProformCarousel'
import { Carousel } from 'react-responsive-carousel'
import Profile from '@/components/Profile/Profile'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface IProformCarousel {
  profileSlides?: {
    imgAlt: string
    imgSrc: string
    name: string
    office: string
    linkedin: string
  }[]
}

export default function ProformCarousel({
  profileSlides,
}: IProformCarousel): JSX.Element {
  return (
    <CarouselWrapper>
      <Carousel
        className="profile"
        autoPlay
        infiniteLoop
        centerMode
        centerSlidePercentage={50}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {profileSlides.map(
          ({ imgAlt, imgSrc, name, office, linkedin }, index) => (
            <Profile
              imgAlt={imgAlt}
              imgSrc={imgSrc}
              name={name}
              office={office}
              linkedin={linkedin}
              key={`Profile_${index}`}
            />
          ),
        )}
      </Carousel>
    </CarouselWrapper>
  )
}
