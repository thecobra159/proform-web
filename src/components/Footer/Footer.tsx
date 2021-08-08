import {
  FooterContainer,
  FooterContent,
  FooterItem,
  FooterItemLink,
  FooterItems,
  FooterItemTitle,
  FooterLogo,
  FooterNote,
  FooterWrapper,
} from '@/styles/components/Footer/Footer'
import { Link } from 'react-scroll'
import { Constants } from '@/utils/Contants'
import { normalizedIdsForLink, normalizedPhone } from '@/utils/Functions'

interface IFooter {
  title: string
  itemsLink?: {
    text: string
    link?: string
    email?: string
    phone?: string
  }[]
  itemsNoLink?: string[]
}

export default function Footer(): JSX.Element {
  const footerMenu: IFooter[] = [
    {
      title: 'menu',
      itemsLink: [
        {
          text: 'home',
          link: '#home',
        },
        {
          text: 'sobre',
          link: '#about',
        },
        {
          text: 'serviços',
          link: '#services',
        },
        {
          text: 'contato',
          link: '#contact',
        },
      ],
    },
    {
      title: 'serviços',
      itemsNoLink: ['consultoria', 'gerenciamento', 'palnejamento'],
    },
    {
      title: 'contato',
      itemsLink: [
        {
          text: Constants.phone,
          phone: normalizedPhone(Constants.phone),
        },
        {
          text: Constants.email,
          email: Constants.email,
        },
      ],
    },
  ]

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLogo
            alt="Proform Enmgenharia Logo"
            src="assets/logo/logo.png"
          />
          {footerMenu.map(({ title, itemsLink, itemsNoLink }, index) => (
            <FooterItems key={`items_${index}`}>
              <FooterItemTitle>{title}</FooterItemTitle>
              {itemsLink &&
                itemsLink.map(({ text, link, email, phone }, index) => (
                  <div key={`item_${index}`}>
                    {link && (
                      <FooterItemLink>
                        <Link
                          to={normalizedIdsForLink(link)}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                        >
                          {text}
                        </Link>
                      </FooterItemLink>
                    )}
                    {(email || phone) && (
                      <FooterItemLink
                        key={text}
                        href={
                          email
                            ? `mailto:${email}`
                            : phone
                            ? `tel:${phone}`
                            : ''
                        }
                      >
                        {text}
                      </FooterItemLink>
                    )}
                  </div>
                ))}
              {itemsNoLink &&
                itemsNoLink.map((item, index) => (
                  <FooterItem key={`$item_no_link_${index}`}>{item}</FooterItem>
                ))}
            </FooterItems>
          ))}
        </FooterContent>
        <FooterNote>
          © 2021 - Proform Engenharia. Todos os direitos reservados.
        </FooterNote>
      </FooterContainer>
    </FooterWrapper>
  )
}
