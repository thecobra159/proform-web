import * as yup from 'yup'
import { Messages } from '@/utils/Contants'

const nameRegex = /^[a-zA-Z/\s]+$/

function isCellphone(value: string): boolean {
  if (!value) return false

  return !!value
    .replace(/[^\d]/g, '')
    .match(
      RegExp(
        '^(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$',
      ),
    )
}

export function normalizedPhone(phone: string): string {
  return phone.replace(/[^+0-9]/g, '')
}

export function normalizedIdsForLink(id: string): string {
  return id.replace('#', '')
}

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, Messages.wrongName)
    .required(Messages.requiredField),
  phone: yup
    .string()
    .test('phone', Messages.wrongPhone, isCellphone)
    .required(Messages.requiredField),
  email: yup
    .string()
    .email(Messages.wrongEmail)
    .required(Messages.requiredField),
  message: yup.string().required(Messages.requiredField),
})
