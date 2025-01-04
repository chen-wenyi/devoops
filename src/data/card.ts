import { Card } from '../typing';

export const cards: Card[] = [
  {
    title: 'Fundamentals',
    blocks: [
      {
        title: 'HTML',
        content: [{ title: 'Semantic', link: '' }],
      },
      {
        title: 'CSS',
        content: [
          { title: 'Box Model', link: '' },
          { title: 'Flexbox', link: '' },
          { title: 'Grid', link: '' },
          { title: 'Animation/Transition', link: '' },
          { title: 'Responsiveness(Meida query)', link: '' },
        ],
      },
      {
        title: 'JavaScript',
        content: [
          { title: 'Variables', link: '' },
          { title: 'Array', link: '' },
          { title: 'Object', link: '' },
          { title: 'Function(Tradiional vs Arrow)', link: '' },
          { title: 'Fetch Api', link: '' },
          { title: 'Asynchronous(Promise, async/await)', link: '' },
        ],
      },
    ],
    color: '#868e96',
  },
  {
    title: 'Front-end',
    blocks: [
      {
        title: 'React',
        content: [
          { title: 'Suspense', link: '/docs/react/suspense' },
        ],
      },
      { title: 'Typescript', content: [] },
      { title: 'Data Management', content: [] },
      { title: 'Tailwind', content: [{ title: 'Cheatsheet', link: '/docs/useful-links/tailwind-cheatsheet' }] },
      { title: 'Framer Motion', content: [] },
      { title: 'Shadcn UI', content: [] },
    ],
    color: '#2f9e44',
  },
  {
    title: 'Bundling',
    blocks: [
      {
        title: 'Webpack',
        content: [],
      },
      {
        title: 'Vite',
        content: [],
      },
    ],
    color: '#e03131',
  },
  {
    title: 'Backend',
    blocks: [
      {
        title: 'NodeJS',
        content: [{ title: 'Express/Koa', link: '' }],
      },
      {
        title: 'ASP.NET Core',
        content: [],
      },
      {
        title: 'Flask',
        content: [],
      },
    ],
    color: '#9c36b5',
  },
  {
    title: 'Full-stack',
    blocks: [{ title: 'Next.js', content: [] }],
    color: '#1971c2',
  },
  {
    title: 'Database',
    blocks: [
      { title: 'RDB', content: [{ title: 'Postgres', link: '' }] },
      {
        title: 'NoSQL',
        content: [
          { title: 'Redis', link: '' },
          { title: 'MongoDB', link: '' },
        ],
      },
      {
        title: 'Web Storage',
        content: [
          { title: 'IndexedDB', link: '' },
        ],
      },
      {
        title: 'ORM',
        content: [
          { title: 'Prisma', link: '' },
          { title: 'Drizzle', link: '' },
          { title: 'Mongoose', link: '' },
        ],
      },
    ],
    color: '#1e1e1e',
  },
  { 
    title: 'Mobile',
    blocks: [
      { title: 'PWA', content: [] },
    ],
    color: '#2f9e44',
  },
  {
    title: 'Authentication',
    blocks: [
      { title: 'Clerk', content: [] },
    ],
    color: '#e8590c',
  },
  {
    title: 'Version Control',
    blocks: [
      { title: 'Git', content: [] },
    ],
    color: '#846358',
  },
  {
    title: 'containerization',
    blocks: [
      { title: 'Docker', content: [] },
    ],
    color: '#0db7ed',
  },
  {
    title: 'CI/CD',
    blocks: [],
    color: '#2f9e44',
  },
  {
    title: 'Cloud Computing Platform',
    blocks: [
      { title: 'AWS', content: [] },
      { title: 'Azure', content: [] },
    ],
    color: '#9c36b5',
  }
];
