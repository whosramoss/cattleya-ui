import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import type { StorybookConfig } from '@storybook/react-vite'

function getDirname(): string {
  if (typeof __dirname !== 'undefined') return __dirname
  return path.dirname(fileURLToPath(import.meta.url))
}

function getRequire(): NodeRequire {
  if (typeof require !== 'undefined') return require
  return createRequire(import.meta.url)
}

function getAbsolutePath(packageName: string) {
  return path.dirname(
    getRequire().resolve(path.join(packageName, 'package.json'))
  )
}

const reactSrc = path.resolve(getDirname(), '../packages/react/src')

const config: StorybookConfig = {
  stories: [
    '../packages/react/__stories__/**/*.mdx',
    '../packages/react/__stories__/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../imgs'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(
        getDirname(),
        '../packages/react/tsconfig.json'
      )
    }
  },
  viteFinal: async (config) => {
    config.define = {
      'process.env': {}
    }

    if (config.resolve) {
      config.resolve.alias = {
        '@': reactSrc,
        '@cattleya/styles': path.join(reactSrc, 'styles'),
        '~@cattleya/styles': path.join(reactSrc, 'styles')
      }
    }

    if (config.plugins) {
      config.plugins.push((await import('@tailwindcss/vite')).default())
    }

    return config
  }
}

export default config
