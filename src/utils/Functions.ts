export function normalizedPhone(phone: string): string {
  return phone.replace(/[^+][^0-9]/g, '')
}

export function normalizedIdsForLink(id: string): string {
  return id.replace('#', '')
}
