import { ReactChild, ReactNode } from 'react'
import Carousel from 'react-multi-carousel'
import { CarouselWrapper } from '@/styles/components/ProformCarousel/ProformCarousel'

interface IProformCarousel {
  children: ReactNode | ReactChild
}

export default function ProformCarousel({
  children,
}: IProformCarousel): JSX.Element {
  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: { breakpoint: { max: 1024, min: 576 }, items: 1 },
    mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
  }

  return (
    <CarouselWrapper>
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots
        arrows
        ssr
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
      >
        {children}
      </Carousel>
    </CarouselWrapper>
  )
}
