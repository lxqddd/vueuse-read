import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**']
  }
})
