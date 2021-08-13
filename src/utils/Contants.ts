import { normalizedPhone } from '@/utils/Functions'

export const Constants = {
  phone: '+55 41 9 1111-1111',
  email: 'contato@proform.com',
  linkedin: 'https://br.linkedin.com/in/guilherme-assumpcao',
  instagram: 'https://www.instagram.com/lipinsski/',
}

export const RedirectLinks = {
  emailLink: `mailto:${Constants.email}`,
  phoneLink: `tel:${normalizedPhone(Constants.phone)}`,
  whatsLink: `https://api.whatsapp.com/send?phone=${normalizedPhone(
    Constants.phone,
  )}&text=${encodeURI(
    'Olá, gostaria de mais informações sobre seus serviços!',
  )}`,
}

export const Messages = {
  formSent: 'Contato enviado com sucesso!',
  formNotSent: 'Contato não enviado, tente novamente mais tarde!',
  requiredField: 'Preencha este campo, por favor!',
  wrongName: 'Preencha o nome corrretamente!',
  wrongEmail: 'Preencha o email corretamente!',
  wrongPhone: 'Preencha o telefone corretamente!',
  wrongMessage: 'Deixe sua mensagem',
}
