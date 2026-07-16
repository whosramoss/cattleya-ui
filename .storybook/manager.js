import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  initialActive: 'welcome--docs',
  theme: create({
    base: 'dark',
    brandTitle: 'cattleya-ui',
    brandUrl: './',
    brandImage: '/name.png',
    brandTarget: '_self',

    fontBase: '"Geist", sans-serif',
    fontCode: '"Geist Mono", monospace',

    colorPrimary: '#BD5B85',
    colorSecondary: '#BD5B85',

    // UI chrome — replace default white surfaces
    appBg: '#2F0619',
    appContentBg: '#2F0619',
    appPreviewBg: '#2F0619',
    appBorderColor: '#BD5B85',
    appBorderRadius: 6,

    // Text
    textColor: '#EFE2E8',
    textMutedColor: '#BD5B85',
    textInverseColor: '#2F0619',

    // Toolbar
    barTextColor: '#EFE2E8',
    barSelectedColor: '#BD5B85',
    barHoverColor: '#BD5B85',
    barBg: '#2F0619',

    // Forms
    inputBg: '#2E2E30',
    inputBorder: '#BD5B85',
    inputTextColor: '#EFE2E8',
    inputBorderRadius: 4,

    // Buttons
    buttonBg: '#BD5B85',
    buttonBorder: '#BD5B85',
  }),
})
