const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Digital Brain to Physical Body',
  url: 'https://Aliza073.github.io',
  baseUrl: '/PHYSICALAI-HUMANOIDTEXTBOOK_BYALIZA/',
  organizationName: 'Aliza073',
  projectName: 'PHYSICALAI-HUMANOIDTEXTBOOK_BYALIZA',
  onBrokenLinks: 'warn',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI Book',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Read Book',
        },
      ],
    },
    prism: {
      additionalLanguages: ['python', 'bash'],
    },
  },
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
