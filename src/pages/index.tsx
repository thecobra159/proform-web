import Banner from '@/components/Banner/Banner'
import SEO from '@/components/SEO/SEO'
import AboutUs from '@/components/AboutUs/AboutUS'
import ProformParallax from '@/components/Parallax/Parallax'
import OurServices from '@/components/OurServices/OurServices'
import { Clients } from '@/components/Clients/Clients'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="Proform Engenharia" description="" />
      <Banner />
      <AboutUs />
      <ProformParallax />
      <OurServices />
      <Clients />
    </>
  )
}
