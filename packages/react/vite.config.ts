import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@cattleya/styles': resolve(__dirname, 'src/styles'),
      '~@cattleya/styles': resolve(__dirname, 'src/styles')
    }
  },
  css: {
    modules: {
      generateScopedName: '[hash:base64:6]'
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      formats: ['es'],
      fileName: 'lib',
      cssFileName: 'style'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
