// Site-wide constants — single source of truth for metadata, nav and contact links.

export const SITE = {
  name: 'Patryk Piasecki',
  title: 'Patryk Piasecki · Data Scientist & ML Specialist',
  description:
    'Data Scientist and ML Specialist in Warsaw. I build machine learning models and the full-stack systems that put them to work.',
  role: 'Data Scientist / ML Specialist',
  location: 'Warsaw, Poland',
} as const;

export const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Static-site safe: no backend. Contact is mailto + external profiles.
export const CONTACT = {
  email: 'patrykpiasecki9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/patryk-piasecki-680a92231',
  github: 'https://github.com/Richi9PP',
} as const;

export const STACK = [
  'Python',
  'SQL',
  'scikit-learn',
  'XGBoost',
  'R',
  'Flask',
  'Power BI',
] as const;
