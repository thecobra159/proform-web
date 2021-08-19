import * as yup from 'yup'
import { Messages } from '@/utils/Contants'
import { IContactRequest } from '@/components/ContactUs/ContactUs'

export const nameRegex = /^[a-zA-Z/\s]+$/
export const numberRegex = /^[0-9 \b]+$/
export const emptyStringRegex = /^$/
export const phoneRegex = /[0-9]{11}/

export function normalizedPhone(phone: string): string {
  return phone.replace(/[^+0-9]/g, '')
}

export function normalizedIdsForLink(id: string): string {
  return id.replace('#', '')
}

export async function sendEmail(data: IContactRequest): Promise<number> {
  console.log(data)

  return 200
}

export const contactSchema = yup.object().shape({
  name: yup.string().matches(nameRegex, Messages.wrongName),
  phone: yup.string().matches(phoneRegex, Messages.wrongPhone),
  email: yup.string().email(Messages.wrongEmail),
  message: yup.string(),
})
