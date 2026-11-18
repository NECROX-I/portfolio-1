import { profile, business } from './profile'

const handle = (url, host) =>
  url.replace(new RegExp(`^https?://(www\\.)?${host}/`), '').replace(/\/$/, '')

export const contactNote =
  'Open for full-time roles / personal or business projects.'

export const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true, wide: true },
  { label: 'LinkedIn', value: handle(profile.linkedin, 'linkedin\\.com'), href: profile.linkedin, out: true },
  { label: 'GitHub', value: handle(profile.github, 'github\\.com'), href: profile.github, out: true },
  { label: 'Resume', value: 'View PDF', href: profile.resume, out: true },
  { label: business.name, value: 'Business Inquiry', href: business.url, out: true },
]
