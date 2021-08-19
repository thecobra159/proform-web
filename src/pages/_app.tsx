import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from '@/components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
        {/*<ToastContainer*/}
        {/*  position="bottom-right"*/}
        {/*  autoClose={5000}*/}
        {/*  hideProgressBar={false}*/}
        {/*  newestOnTop={false}*/}
        {/*  closeOnClick*/}
        {/*  rtl={false}*/}
        {/*  pauseOnFocusLoss*/}
        {/*  draggable*/}
        {/*  pauseOnHover*/}
        {/*/>*/}
      </ParallaxProvider>
      <Footer />
    </>
  )
}
