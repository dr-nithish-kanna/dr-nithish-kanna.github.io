/**
 * Site-wide settings. This is the ONE place to put real contact links,
 * the logo path and the Google Analytics ID.
 *
 * Any value that still contains "YOUR_" is treated as a placeholder:
 * the site shows a neutral "coming soon" state instead of a broken link.
 */
export const site = {
  name: 'Nifty Games Studios',
  shortName: 'Nifty Games',
  url: 'https://niftygamesstudios.in',
  tagline: 'Unity game development for studios and indie teams',
  description:
    'Nifty Games Studios: Unity game developer with 5+ years of experience building 2D, casual, typing and WebGL games. Available for freelance projects.',

  /** Logo shown next to the wordmark. Swap the file in /public/assets/ (keep the name, or change this path). */
  logo: '/assets/logo.png',

  /** Default social share image (1200x630) in /public. */
  ogImage: '/og/default.png',

  contact: {
    // TODO(owner): your public email, e.g. 'hello@niftygamesstudios.in'
    email: 'YOUR_EMAIL@example.com',
    fiverr: 'https://www.fiverr.com/niftygames17/',
    instagram: 'https://www.instagram.com/niftygamesstudios',
    // Real, public profile (from the itch.io account).
    itch: 'https://nifty-games.itch.io',
  },

  analytics: {
    // TODO(owner): GA4 Measurement ID, e.g. 'G-XXXXXXXXXX'. Leave '' to disable analytics entirely.
    ga4Id: '',
  },
} as const;

export const isPlaceholder = (value: string | null | undefined): boolean =>
  !value || value.includes('YOUR_');

export const mailto = (email: string, subject = 'Project enquiry') =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const nav = [
  { href: '/games/', label: 'Games' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/devlog/', label: 'Devlog' },
  { href: '/contact/', label: 'Contact' },
] as const;
