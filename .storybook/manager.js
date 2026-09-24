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

    colorPrimary: '#e6007c',
    colorSecondary: '#e6007c',

    // UI chrome — replace default white surfaces
    appBg: '#a20058',
    appContentBg: '#a20058',
    appPreviewBg: '#ffffff',
    appBorderColor: '#e6007c',
    appBorderRadius: 6,

    // Text
    textColor: '#ffffff',
    textMutedColor: '#e6007c',
    textInverseColor: '#a20058',

    // Toolbar
    barTextColor: '#ffffff',
    barSelectedColor: '#e6007c',
    barHoverColor: '#e6007c',
    barBg: '#a20058',

    // Forms
    inputBg: '#2E2E30',
    inputBorder: '#e6007c',
    inputTextColor: '#ffffff',
    inputBorderRadius: 4,

    // Buttons
    buttonBg: '#ffffff',
    buttonBorder: '#e6007c'
  })
})
