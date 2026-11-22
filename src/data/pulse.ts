/**
 * Pulse landing page (/pulse/). This is the ONE file to edit for the Pulse pages.
 *
 * Any link that still contains "YOUR_" (or is empty) is treated as a placeholder:
 * the page shows a neutral "opens soon" state instead of a broken link.
 */
export const pulse = {
  /** Tally form share link, e.g. 'https://tally.so/r/abc123'. The page adds ?c=<creator>&ref=pulse-site. */
  tallyUrl: 'YOUR_TALLY_FORM_URL',

  /** WhatsApp Channel invite link, e.g. 'https://whatsapp.com/channel/...'. */
  whatsappChannelUrl: 'YOUR_WHATSAPP_CHANNEL_URL',

  /** Google Play link. Leave '' until Pulse is on the store. */
  playStoreUrl: '',

  /**
   * Real app screenshots. Put portrait images (about 540 x 1170, WebP) in
   * public/images/pulse/ and list them here. While this is empty, the page
   * shows the feature graphic instead.
   * Example: { src: '/images/pulse/shot-learn.webp', alt: 'A Pulse card during a learn session', caption: 'One fact per card' }
   */
  screenshots: [] as { src: string; alt: string; caption: string; width?: number; height?: number }[],

  /** Chapters in the beta, shown as chips. */
  betaChapters: ['Cardiology', 'Dermatology', 'Respiratory'],

  proofPoints: [
    {
      icon: 'brain',
      title: 'Remembers for you',
      text: 'Spaced repetition shows a fact again just before you forget it.',
    },
    {
      icon: 'clock',
      title: 'Fits duty hours',
      text: 'Sessions take about 3 minutes, so a break between patients is enough.',
    },
    {
      icon: 'route',
      title: 'Follows your syllabus',
      text: 'Pick topics into a journey and learn them in book order.',
    },
    {
      icon: 'flame',
      title: 'Better with friends',
      text: 'Streaks, XP, levels and a weekly leaderboard keep you coming back.',
    },
  ],

  steps: [
    { title: 'Join the waitlist', text: 'It takes a minute. Use the Google account email that is on your Android phone.' },
    { title: 'Get your invite', text: 'We add people to the Google Play beta in waves and send you the link.' },
    { title: 'Use it and tell us', text: 'Revise with Pulse and tell us what to fix. Your feedback shapes the app.' },
  ],

  faq: [
    {
      q: 'Is it free?',
      a: 'Yes, the beta is free. If anything is ever paid, we will say so clearly before it happens.',
    },
    {
      q: 'Which phones does it work on?',
      a: 'Android first. iPhone will come later.',
    },
    {
      q: 'Who is it for?',
      a: 'NEET PG aspirants and interns who want to keep what they have already read.',
    },
    {
      q: 'Is this a question bank?',
      a: 'No. Pulse is a memory tool for revision: cards, reviews and quizzes. It does not replace your textbooks or coaching.',
    },
    {
      q: 'Why do you ask for my Google account email?',
      a: 'Google Play needs it to add you to the beta. We use it only for that.',
    },
  ],
};
