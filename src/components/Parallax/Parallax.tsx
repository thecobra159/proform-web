import { Parallax } from 'react-parallax'
import {
  ParallaxContent,
  ParallaxIcon,
  ParallaxName,
  ParallaxOffice,
  ParallaxPhrase,
  ParallaxWrapper,
} from '@/styles/components/Parallax/Parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function ProformParallax(): JSX.Element {
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage="assets/banner_3.jpg"
      bgImageAlt="constructions"
      strength={350}
      style={{ opacity: 0.8 }}
    >
      <ParallaxWrapper>
        <ParallaxContent>
          <ParallaxPhrase>
            <ParallaxIcon>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </ParallaxIcon>
            Só se faz progresso quando se pensa que algo mais pode ser feito.
            <ParallaxIcon className="end">
              <FontAwesomeIcon icon={faQuoteRight} />
            </ParallaxIcon>
          </ParallaxPhrase>
          <ParallaxName>Guillermo Marconi</ParallaxName>
          <ParallaxOffice>Inventor e físico italiano</ParallaxOffice>
        </ParallaxContent>
      </ParallaxWrapper>
    </Parallax>
  )
}
