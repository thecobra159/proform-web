import {
  ServiceCardContent,
  ServiceCardImage,
  ServiceCardImageContainer,
  ServiceCardItem,
  ServiceCardItems,
  ServiceCardTitle,
  ServiceCardWrapper,
} from '@/styles/components/ServiceCard/ServiceCard'

export interface IServiceCard {
  imgSrc: string
  imgAlt: string
  serviceTitle: string
  serviceItems: string[]
}

export default function ServiceCard({
  imgSrc,
  imgAlt,
  serviceTitle,
  serviceItems,
}: IServiceCard): JSX.Element {
  return (
    <ServiceCardWrapper>
      <ServiceCardImageContainer>
        <ServiceCardImage src={imgSrc} alt={imgAlt} />
      </ServiceCardImageContainer>
      <ServiceCardContent>
        <ServiceCardTitle>{serviceTitle}</ServiceCardTitle>
        <ServiceCardItems>
          {serviceItems.map((item, index) => (
            <ServiceCardItem key={`item_${index}`}>{item}</ServiceCardItem>
          ))}
        </ServiceCardItems>
      </ServiceCardContent>
    </ServiceCardWrapper>
  )
}
