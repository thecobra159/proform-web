import styled, { css } from 'styled-components'
import Image from '@/components/Image/Image'
import { media } from '@/styles/GlobalStyles'

interface IParallaxProps {
  offset: number
}

function parallaxEffect({ offset }: IParallaxProps) {
  const pixels = `${offset * 0.5}px`

  return css`
    transform: translateY(${pixels});
  `
}

export const ParallaxWrapper = styled.div`
  display: flex;
  height: 50vh;
  overflow: hidden;
  width: 100%;
`

export const ParallaxBackgroundImage = styled(Image)<IParallaxProps>`
  ${parallaxEffect};
  -moz-transition: position 10s;
  -ms-transition: position 10s;
  -o-transition: position 10s;
  -webkit-transition: all 0.5s ease;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  position: absolute;
  transition: all 0.5s ease;
  width: 100%;
  z-index: -5;

  ${media.tablet} {
    margin-top: -115%;
  }
`

export const ParallaxContent = styled.div`
  position: relative;
  width: 80%;
`
