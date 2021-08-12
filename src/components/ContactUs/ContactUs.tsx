import {
  ContactUsBox,
  ContactUsBoxItem,
  ContactUsBoxItemText,
  ContactUsBoxItemTitle,
  ContactUsBoxSocialMedia,
  ContactUsBoxSocialMediaImage,
  ContactUsBoxSocialMediaLink,
  ContactUsBoxTitle,
  ContactUsContent,
  ContactUsFormWrapper,
  ContactUsTitle,
  ContactUsWrapper,
} from '@/styles/components/ContactUs/ContactUs'
import { Constants, RedirectLinks } from '@/utils/Contants'

interface IContactUs {
  title: string
  text?: string
  link?: string
  socialMedia?: {
    imageSrc: string
    imageAlt: string
    imageLink: string
  }[]
}

export default function ContactUs(): JSX.Element {
  const boxItems: IContactUs[] = [
    {
      title: 'phone:',
      text: Constants.phone,
      link: RedirectLinks.phoneLink,
    },
    {
      title: 'email:',
      text: Constants.email,
      link: RedirectLinks.emailLink,
    },
    {
      title: 'R. João Bettega, 6375',
      text: 'CIC, Curitiba - Paraná',
    },
    {
      title: 'redes sociais:',
      socialMedia: [
        {
          imageSrc: 'assets/logo/insta.png',
          imageAlt: 'Proform Instagram',
          imageLink: Constants.instagram,
        },
        {
          imageSrc: 'assets/logo/linkedin.png',
          imageAlt: 'Proform Linkedin',
          imageLink: Constants.linkedin,
        },
        {
          imageSrc: 'assets/logo/telegram.png',
          imageAlt: 'Proform Telegram',
          imageLink: RedirectLinks.whatsLink,
        },
      ],
    },
  ]

  return (
    <ContactUsWrapper>
      <ContactUsTitle>Contato</ContactUsTitle>
      <ContactUsContent>
        <ContactUsBox>
          <ContactUsBoxTitle>
            Preencha o formulário ou contate-nos através dos nossos canais de
            comunicação:
          </ContactUsBoxTitle>
          {boxItems.map(({ title, text, link, socialMedia }, index) =>
            text ? (
              <ContactUsBoxItem key={`item_${index}`}>
                <ContactUsBoxItemTitle>{title}</ContactUsBoxItemTitle>
                {link ? (
                  <ContactUsBoxSocialMediaLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactUsBoxItemText>{text}</ContactUsBoxItemText>
                  </ContactUsBoxSocialMediaLink>
                ) : (
                  <ContactUsBoxItemText>{text}</ContactUsBoxItemText>
                )}
              </ContactUsBoxItem>
            ) : (
              <ContactUsBoxItem key={`item_${index}`}>
                <ContactUsBoxItemTitle>{title}</ContactUsBoxItemTitle>
                <ContactUsBoxSocialMedia>
                  {socialMedia.map(
                    ({ imageAlt, imageSrc, imageLink }, imageIndex) => (
                      <ContactUsBoxSocialMediaLink
                        href={imageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={`link_${imageIndex}`}
                      >
                        <ContactUsBoxSocialMediaImage
                          alt={imageAlt}
                          src={imageSrc}
                        />
                      </ContactUsBoxSocialMediaLink>
                    ),
                  )}
                </ContactUsBoxSocialMedia>
              </ContactUsBoxItem>
            ),
          )}
        </ContactUsBox>

        <ContactUsFormWrapper>sadsadsadsad</ContactUsFormWrapper>
      </ContactUsContent>
    </ContactUsWrapper>
  )
}
