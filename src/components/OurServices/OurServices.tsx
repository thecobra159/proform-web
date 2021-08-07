import {
  OurServicesCardsContainer,
  OurServicesText,
  OurServicesTitle,
  OurServicesWrapper,
} from '@/styles/components/OurServices/OurServices'

export default function OurServices(): JSX.Element {
  return (
    <OurServicesWrapper id="services">
      <OurServicesTitle>Serviços</OurServicesTitle>
      <OurServicesText>
        Oferecemos os serviços de consultoria, planejamento e gerenciamento para
        sua empresa.
      </OurServicesText>
      <OurServicesCardsContainer>
        <div>card 1</div>
        <div>card 2</div>
        <div>card 3</div>
      </OurServicesCardsContainer>
    </OurServicesWrapper>
  )
}
