import {
  AboutUsContent,
  AboutUsContentBox,
  AboutUsProfiles,
  AboutUsProfilesMobile,
  AboutUsTitle,
  AboutUsWrapper,
} from '@/styles/components/AboutUs/AboutUs'
import Profile from '@/components/Profile/Profile'
import ProformCarousel from '@/components/ProformCarousel/ProformCarousel'

export default function AboutUs(): JSX.Element {
  const profiles = [
    {
      imgSrc: 'assets/profiles/serjão.jpg',
      imgAlt: 'Serjão CEO',
      name: 'Serjão Assumpção',
      office: 'CEO',
      linkedin:
        'https://br.linkedin.com/in/sergio-assump%C3%A7%C3%A3o-3a85351aa',
    },
    {
      imgSrc: 'assets/profiles/gui.png',
      imgAlt: 'Gui CEO jr',
      name: 'Guilherme Lipinski',
      office: 'CEO jr',
      linkedin: 'https://br.linkedin.com/in/guilherme-assumpcao',
    },
    {
      imgSrc: 'assets/profiles/gui.png',
      imgAlt: 'Gui CEO jr',
      name: 'Guilherme Lipinski',
      office: 'CEO jr',
      linkedin: 'https://br.linkedin.com/in/guilherme-assumpcao',
    },
    {
      imgSrc: 'assets/profiles/gui.png',
      imgAlt: 'Gui CEO jr',
      name: 'Guilherme Lipinski',
      office: 'CEO jr',
      linkedin: 'https://br.linkedin.com/in/guilherme-assumpcao',
    },
  ]

  return (
    <AboutUsWrapper id="about">
      <AboutUsTitle>SOBRE A PROFORM</AboutUsTitle>
      <AboutUsContent>
        <AboutUsContentBox>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris
            qui num significa nadis i pareci latim. Manduma pindureta quium dia
            nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam
            molestie leo, vitae iaculis nisl. Leite de capivaris, leite de mula
            manquis sem cabeça.
          </p>
        </AboutUsContentBox>

        <AboutUsProfiles>
          {profiles.map(({ imgAlt, imgSrc, name, office, linkedin }, index) => (
            <Profile
              imgAlt={imgAlt}
              imgSrc={imgSrc}
              name={name}
              office={office}
              linkedin={linkedin}
              key={`profile_${index}`}
            />
          ))}
        </AboutUsProfiles>

        <AboutUsProfilesMobile>
          <ProformCarousel profileSlides={profiles} />
        </AboutUsProfilesMobile>
      </AboutUsContent>
    </AboutUsWrapper>
  )
}
