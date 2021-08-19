import { Formik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
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
  ContactUsForm,
  ContactUsFormButton,
  ContactUsFormWrapper,
  ContactUsTitle,
  ContactUsWrapper,
} from '@/styles/components/ContactUs/ContactUs'
import { Constants, Messages, RedirectLinks } from '@/utils/Contants'
import {
  Input,
  InputMessage,
  InputWrapper,
} from '@/styles/components/Input/Input'
import { Button } from '@/styles/components/Button/Button'
import {
  contactSchema,
  emptyStringRegex,
  numberRegex,
  sendEmail,
} from '@/utils/Functions'

import ArrowRight from '../../../public/assets/right-arrow.svg'

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

export interface IContactRequest {
  name: string
  email: string
  phone: string
  service: string
  message: string
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
          imageSrc: 'assets/logo/whatsapp.png',
          imageAlt: 'Proform WhatsApp',
          imageLink: RedirectLinks.whatsLink,
        },
      ],
    },
  ]
  const services = [
    {
      label: 'Consultoria em paredes de concreto',
      value: 'Consultoria em paredes de concreto',
    },
    {
      label: 'Planejamento e orçamento de obras',
      value: 'Planejamento e orçamento de obras',
    },
    {
      label: 'Gerenciamento de obras',
      value: 'Gerenciamento de obras',
    },
  ]
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(services[0].value)
  const [message, setMessage] = useState('')

  async function handleSubmit(): Promise<void> {
    const data: IContactRequest = {
      name,
      email,
      phone,
      service,
      message,
    }
    const isValid = await contactSchema.isValid(data)
    console.log('is valid -> ', isValid)
    await sendEmail(data)

    if (isValid) {
      toast(Messages.formSent, { type: 'success' })
    } else {
      toast(Messages.formNotSent, { type: 'error' })
    }
  }

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

        <ContactUsFormWrapper>
          <Formik
            initialValues={{
              name: name,
              email: email,
              phone: phone,
              service: service,
              message: message,
            }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            <ContactUsForm>
              <InputWrapper>
                <InputMessage name="name" component="div" />
                <Input
                  required
                  placeholder="nome completo"
                  name="name"
                  type="text"
                  onChange={({ target: { value } }) => setName(value)}
                  value={name}
                />
              </InputWrapper>
              <InputWrapper>
                <InputMessage name="email" component="div" />
                <Input
                  required
                  placeholder="e-mail"
                  name="email"
                  type="email"
                  onChange={({ target: { value } }) => setEmail(value)}
                  value={email}
                />
              </InputWrapper>
              <InputWrapper>
                <InputMessage name="phone" component="div" />
                <Input
                  required
                  placeholder="telefone"
                  name="phone"
                  inputMode="numeric"
                  type="tel"
                  maxLength="11"
                  value={phone}
                  onChange={({ target: { value } }) => {
                    if (
                      numberRegex.test(value) ||
                      emptyStringRegex.test(value)
                    ) {
                      setPhone(value)
                    }
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  required
                  placeholder="serviço desejado"
                  name="name"
                  as="select"
                  onChange={({ target: { value } }) => setService(value)}
                >
                  {services.map(({ label, value }, index) => (
                    <option value={value} key={`service_${index}`}>
                      {label}
                    </option>
                  ))}
                </Input>
              </InputWrapper>
              <InputWrapper width="95%">
                <InputMessage name="message" component="div" />
                <Input
                  required
                  placeholder="mensagem"
                  type="text"
                  name="message"
                  as="textarea"
                  height="300px"
                  value={message}
                  onChange={({ target: { value } }) => setMessage(value)}
                />
              </InputWrapper>
              <ContactUsFormButton>
                <Button type="button" onClick={handleSubmit}>
                  enviar <ArrowRight />
                </Button>
              </ContactUsFormButton>
            </ContactUsForm>
          </Formik>
        </ContactUsFormWrapper>
      </ContactUsContent>
    </ContactUsWrapper>
  )
}
