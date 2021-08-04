import Banner from '@/components/Banner/Banner'
import SEO from '@/components/SEO/SEO'
import AboutUs from '@/components/AboutUs/AboutUS'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="Proform Engenharia" description="" />
      <Banner />
      <AboutUs />
      {/*<ProformParallax />*/}
      {/*<AboutUs />*/}
    </>
  )
}
