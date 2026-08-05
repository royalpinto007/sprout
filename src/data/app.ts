export const APP = {
  name: 'Sprout',
  tagline: 'A gentle habit tracker that grows with you, one small day at a time.',
}

export const NAV = [
  { label: 'Features', href: '/features' },
  { label: 'Stories', href: '/stories' },
  { label: 'Pricing', href: '/pricing' },
]

// habits shown in the phone mockup
export const HABITS = [
  {
    name: 'Morning water',
    streak: 24,
    done: true,
    color: 'var(--color-sky)',
    icon: '💧',
  },
  {
    name: 'Ten-minute walk',
    streak: 12,
    done: true,
    color: 'var(--color-leaf)',
    icon: '🌿',
  },
  {
    name: 'Read a few pages',
    streak: 8,
    done: true,
    color: 'var(--color-lilac)',
    icon: '📖',
  },
  { name: 'Stretch', streak: 31, done: false, color: 'var(--color-peach)', icon: '🧘' },
  {
    name: 'Lights out by 11',
    streak: 5,
    done: false,
    color: 'var(--color-sky)',
    icon: '🌙',
  },
]

export const FEATURES = [
  {
    title: 'Streaks that forgive',
    body: 'Miss a day? Sprout keeps your streak alive with a grace day, because one slip is not a failure.',
    tint: 'var(--color-leaf)',
    icon: '🌱',
  },
  {
    title: 'Gentle nudges',
    body: 'Reminders that read like a friend, not a drill sergeant. Snooze any of them, guilt-free.',
    tint: 'var(--color-peach)',
    icon: '🔔',
  },
  {
    title: 'A garden that grows',
    body: 'Every habit you keep grows a plant. Your home screen becomes a quiet record of your months.',
    tint: 'var(--color-lilac)',
    icon: '🪴',
  },
  {
    title: 'See your patterns',
    body: 'Calm weekly reflections show when you thrive and when you dip, without a single red alert.',
    tint: 'var(--color-sky)',
    icon: '📊',
  },
  {
    title: 'Yours, and private',
    body: 'Everything stays on your device by default. Sync is end-to-end encrypted when you turn it on.',
    tint: 'var(--color-leaf)',
    icon: '🔒',
  },
  {
    title: 'Share a habit',
    body: 'Keep a habit with a friend or partner and cheer each other on. Accountability, the kind way.',
    tint: 'var(--color-peach)',
    icon: '🤝',
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Plant a habit',
    body: 'Pick something small and real. Two minutes counts.',
  },
  {
    n: '02',
    title: 'Tend it daily',
    body: 'Check in with a tap. Watch the streak, and the plant, grow.',
  },
  {
    n: '03',
    title: 'Grow a garden',
    body: 'A month later, look back at everything you quietly kept up.',
  },
]

export const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    note: 'Everything you need to start.',
    perks: ['Up to 5 habits', 'Streaks and reminders', 'Your garden on one device'],
    featured: false,
    cta: 'Get Sprout',
  },
  {
    name: 'Plus',
    price: '$4',
    period: 'per month',
    note: 'For when the garden grows.',
    perks: [
      'Unlimited habits',
      'Encrypted sync across devices',
      'Weekly reflections',
      'Shared habits',
      'All plant themes',
    ],
    featured: true,
    cta: 'Start free trial',
  },
  {
    name: 'Family',
    price: '$8',
    period: 'per month',
    note: 'Up to six people.',
    perks: [
      'Everything in Plus',
      'Six member accounts',
      'Family garden view',
      'Priority support',
    ],
    featured: false,
    cta: 'Start free trial',
  },
]

export const STORIES = [
  {
    quote:
      'I have started and quit every habit app. Sprout is the first one that never made me feel bad, so I actually kept going.',
    name: 'Maya R.',
    role: '92-day streak',
    tint: 'var(--color-leaf)',
  },
  {
    quote:
      'The grace day is genius. Missing one day used to make me quit entirely. Now I just keep growing.',
    name: 'Devin K.',
    role: '210-day streak',
    tint: 'var(--color-peach)',
  },
  {
    quote:
      'My partner and I share a walking habit. It is the nicest little check-in we have all day.',
    name: 'Priya S.',
    role: 'Shared habit',
    tint: 'var(--color-lilac)',
  },
  {
    quote:
      'It feels less like software and more like a small plant on my windowsill that I look after.',
    name: 'Tom B.',
    role: '148-day streak',
    tint: 'var(--color-sky)',
  },
]

export const STATS = [
  { value: '4.9', label: 'App Store rating' },
  { value: '120k+', label: 'Gardens growing' },
  { value: '2.1M', label: 'Habits kept' },
  { value: '81%', label: 'Still active at 90 days' },
]

export const FAQ = [
  {
    q: 'Is Sprout really free?',
    a: 'Yes. The free plan keeps up to five habits forever, with no ads and no selling your data. Plus is optional.',
  },
  {
    q: 'What is a grace day?',
    a: 'If you miss a day, Sprout quietly uses a grace day to keep your streak alive instead of resetting it to zero. You earn more as you go.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On your device by default. If you turn on sync, it is end-to-end encrypted, so not even we can read it.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Sprout is available for iOS and Android, with a read-only web garden on the way.',
  },
]
