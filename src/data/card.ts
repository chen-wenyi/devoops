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
          { title: 'Suspense', link: '/docs/frontend/react/suspense' },
          {
            title: 'useTransition',
            link: '/docs/frontend/react/usetransition',
          },
          {
            title: 'useOptimistic',
            link: '/docs/frontend/react/useoptimistic',
          },
        ],
      },
      { title: 'Typescript', content: [] },
      {
        title: 'Data Management',
        content: [
          { title: 'Redux', link: '' },
          { title: 'Zustand', link: '' },
        ],
      },
      { title: 'HTTP/WS', content: [{ title: 'Axios', link: '' }] },
      {
        title: 'UI',
        content: [
          {
            title: 'Tailwind',
            link: '/docs/useful-links/tailwind-cheatsheet',
          },
          {
            title: 'Framer Motion',
            link: '',
          },
          {
            title: 'Shadcn UI',
            link: '',
          },
        ],
      },
    ],
    color: '#2f9e44',
  },
  {
    title: 'Front-end Tooling',
    blocks: [
      {
        title: 'Build Tools',
        content: [
          { title: 'Vite', link: '' },
          { title: 'create-raect-app', link: '' },
        ],
      },
      {
        title: 'Bundlers',
        content: [
          { title: 'Turbopack', link: '' },
          { title: 'Webpack', link: '' },
          { title: 'Rollup', link: '' },
        ],
      },
      {
        title: 'Package Management',
        content: [
          { title: 'npm', link: '' },
          { title: 'yarn', link: '' },
          { title: 'pnpm', link: '' },
        ],
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
        content: [{ title: 'IndexedDB', link: '' }],
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
    color: '#fab005',
  },
  {
    title: 'Mobile',
    blocks: [{ title: 'PWA', content: [] }],
    color: '#2f9e44',
  },
  {
    title: 'Authentication',
    blocks: [{ title: 'Clerk', content: [] }],
    color: '#e8590c',
  },
  {
    title: 'Version Control',
    blocks: [{ title: 'Git', content: [] }],
    color: '#846358',
  },
  {
    title: 'containerization',
    blocks: [{ title: 'Docker', content: [] }],
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
      {
        title: 'Azure',
        content: [
          {
            title: 'Fundamentals',
            link: '/docs/cloud-computing-platform/Azure/azure-fundamentals',
          },
        ],
      },
    ],
    color: '#9c36b5',
  },
];
