import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
      css: {
        modules: {
          classNameStrategy: 'non-scoped'
        }
      },
      coverage: {
        reporter: ['text', 'lcov']
      }
    }
  })
)
