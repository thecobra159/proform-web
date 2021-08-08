import {
  OurServicesCardsContainer,
  OurServicesText,
  OurServicesTitle,
  OurServicesWrapper,
} from '@/styles/components/OurServices/OurServices'
import ServiceCard, { IServiceCard } from '@/components/ServiceCard/ServiceCard'

export default function OurServices(): JSX.Element {
  const services: IServiceCard[] = [
    {
      imgSrc: 'assets/our-services/wall.jpg',
      imgAlt: 'Parede de concreto',
      serviceTitle: 'Consultoria em paredes de concreto',
      serviceItems: [
        'Ajuda você nas parede e é nois',
        'Ajuda você nas parede e é nois',
        'Ajuda você nas parede e é nois',
      ],
    },
    {
      imgSrc: 'assets/our-services/planning.jpg',
      imgAlt: 'Planejamento',
      serviceTitle: 'Planejamento e orçamento de obras',
      serviceItems: [
        'Planeja suas obras e é nois',
        'Planeja suas obras e é nois',
        'Planeja suas obras e é nois',
      ],
    },
    {
      imgSrc: 'assets/our-services/constructions.jpg',
      imgAlt: 'Gerenciamento',
      serviceTitle: 'Gerenciamento de obras',
      serviceItems: [
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
      ],
    },
    {
      imgSrc: 'assets/our-services/constructions.jpg',
      imgAlt: 'Gerenciamento',
      serviceTitle: 'Gerenciamento de obras',
      serviceItems: [
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
      ],
    },
    {
      imgSrc: 'assets/our-services/constructions.jpg',
      imgAlt: 'Gerenciamento',
      serviceTitle: 'Gerenciamento de obras',
      serviceItems: [
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
        'Gerenciamos suas obras e é nois',
      ],
    },
  ]

  return (
    <OurServicesWrapper id="services">
      <OurServicesTitle>Serviços</OurServicesTitle>
      <OurServicesText>
        Oferecemos os serviços de consultoria, planejamento e gerenciamento para
        sua empresa.
      </OurServicesText>
      <OurServicesCardsContainer>
        {services.map((service, index) => (
          <ServiceCard key={`${service.serviceTitle}_${index}`} {...service} />
        ))}
      </OurServicesCardsContainer>
      <OurServicesText>
        Entre em contato conosco para maiores informações!
      </OurServicesText>
    </OurServicesWrapper>
  )
}
