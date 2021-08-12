import Banner from '@/components/Banner/Banner'
import SEO from '@/components/SEO/SEO'
import AboutUs from '@/components/AboutUs/AboutUS'
import ProformParallax from '@/components/Parallax/Parallax'
import OurServices from '@/components/OurServices/OurServices'
import Clients from '@/components/Clients/Clients'
import ContactUs from '@/components/ContactUs/ContactUs'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Proform Engenharia"
        description="A Proform Engenahria ajuda você com serviços de consultoria,
        planejamento e gerenciamento para sua empresa."
      />
      <Banner />
      <AboutUs />
      <ProformParallax />
      <OurServices />
      <Clients />
      <ContactUs />
    </>
  )
}
