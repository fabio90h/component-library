module.exports = {
  stories: [
    '../src/**/*.stories.tsx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
};
