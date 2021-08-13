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
  ContactUsFormWrapper,
  ContactUsTitle,
  ContactUsWrapper,
} from '@/styles/components/ContactUs/ContactUs'
import { Constants, Messages, RedirectLinks } from '@/utils/Contants'
import { Formik } from 'formik'
import { useState } from 'react'
import {
  Input,
  InputMessage,
  InputWrapper,
} from '@/styles/components/Input/Input'
import { contactSchema } from '@/utils/Functions'
import { toast } from 'react-toastify'

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

interface IContactRequest {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactUs(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
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

  async function handleSubmit(formData: IContactRequest): Promise<void> {
    const isValid = await contactSchema.isValid(formData)

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
            onSubmit={fields => {
              handleSubmit({
                name: fields.name,
                email: fields.email,
                phone: fields.phone,
                service: fields.service,
                message: fields.message,
              })
            }}
          >
            <ContactUsForm>
              <InputWrapper>
                <InputMessage name="name" component="div" />
                <Input placeholder="nome completo" name="name" type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputMessage name="email" component="div" />
                <Input placeholder="e-mail" name="email" type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputMessage name="phone" component="div" />
                <Input
                  placeholder="telefone: (xx) 9xxxx-xxxx"
                  name="phone"
                  inputMode="numeric"
                  maxLenght={11}
                />
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="serviço desejado" name="name" as="select">
                  {services.map(({ label, value }, index) => (
                    <option value={value} key={`service_${index}`}>
                      {label}
                    </option>
                  ))}
                </Input>
              </InputWrapper>
              <InputWrapper width="95%" height="300px">
                <InputMessage name="message" />
                <Input
                  placeholder="mensagem"
                  type="text"
                  name="message"
                  hasError
                />
              </InputWrapper>
              <button type="submit">ok</button>
            </ContactUsForm>
          </Formik>
        </ContactUsFormWrapper>
      </ContactUsContent>
    </ContactUsWrapper>
  )
}
