import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DevOops',
  tagline: 'Oops Happens — We Document It.',
  favicon: 'img/icon/favicon.ico',

  // Set the production url of your site here
  url: 'https://chen-wenyi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/devoops',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chen-wenyi', // Usually your GitHub org/user name.
  projectName: 'devoops', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DevOops',
      logo: {
        alt: 'DevOops Logo',
        src: 'img/icon/favicon.svg',
      },
      hideOnScroll: true,  // Enables hiding navbar on scroll
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/chen-wenyi/devoops',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'CDC78XYJGF',

      // Public API key: it is safe to commit it
      apiKey: '6d64c0e4f3c53c0cab052619560676a2',

      indexName: 'chen-wenyiio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        // autoCollapseCategories: true,
        
      },
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Docs',
    //     //       to: '/docs/intro',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Community',
    //     //   items: [
    //     //     {
    //     //       label: 'Stack Overflow',
    //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Discord',
    //     //       href: 'https://discordapp.com/invite/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'X',
    //     //       href: 'https://x.com/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/chen-wenyi/devoops',
    //         },
    //       ],
    //     },
    //   ],
    //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
