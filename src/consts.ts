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
] as const;

// Static-site safe: no backend. Contact is mailto + external profiles.
export const CONTACT = {
  email: 'patrykpiasecki9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/patryk-piasecki-680a92231',
  github: 'https://github.com/Richi9PP',
} as const;

// Ordered so the ticker alternates between modelling and delivery rather than
// running all the data-science names together and then all the web ones.
export const STACK = [
  'Python',
  'SQL',
  'pandas',
  'scikit-learn',
  'Flask',
  'XGBoost',
  'NumPy',
  'React',
  'statsmodels',
  'PyTorch',
  'TypeScript',
  'SHAP',
  'SAS',
  'Tailwind',
  'R',
  'Plotly',
  'Socket.IO',
  'Power BI',
  'Playwright',
  'Supabase',
] as const;
