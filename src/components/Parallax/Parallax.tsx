import {
  ParallaxBackgroundImage,
  ParallaxWrapper,
} from '@/styles/components/Parallax/Parallax'
import { useEffect, useState } from 'react'

export default function ProformParallax(): JSX.Element {
  const [offsetY, setOffsetY] = useState(0)

  function handleScroll() {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return window.removeEventListener('scroll', handleScroll)
  })

  return (
    <ParallaxWrapper>
      <ParallaxBackgroundImage
        src="assets/banner_3.jpg"
        alt="constructions"
        offset={offsetY}
      />
    </ParallaxWrapper>
  )
}
