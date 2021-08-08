import {
  ClientsWrapper,
  ClientsTitle,
  ClientsContent,
  ClientLogo,
} from '@/styles/components/Clients/Clients'

interface IClient {
  text: string
  imgSrc: string
  imgAlt: string
}

export function Clients(): JSX.Element {
  const clients: IClient[] = [
    {
      text: 'Pride',
      imgAlt: 'Pride Construtora Logo',
      imgSrc: 'assets/clients/pride.png',
    },
    {
      text: 'Igga',
      imgAlt: 'IGGA Logo',
      imgSrc: 'assets/clients/igga.png',
    },
    {
      text: 'Pride',
      imgAlt: 'Pride Construtora Logo',
      imgSrc: 'assets/clients/pride.png',
    },
    {
      text: 'Igga',
      imgAlt: 'IGGA Logo',
      imgSrc: 'assets/clients/igga.png',
    },
    {
      text: 'Pride',
      imgAlt: 'Pride Construtora Logo',
      imgSrc: 'assets/clients/pride.png',
    },
    {
      text: 'Igga',
      imgAlt: 'IGGA Logo',
      imgSrc: 'assets/clients/igga.png',
    },
  ]

  return (
    <ClientsWrapper>
      <ClientsTitle>Clientes</ClientsTitle>
      <ClientsContent>
        {clients.map(({ text, imgAlt, imgSrc }, index) => (
          <ClientLogo alt={imgAlt} src={imgSrc} key={`${text}_${index}`} />
        ))}
      </ClientsContent>
    </ClientsWrapper>
  )
}
