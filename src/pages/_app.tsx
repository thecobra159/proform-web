import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
