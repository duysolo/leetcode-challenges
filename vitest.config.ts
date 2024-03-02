import {configDefaults, defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
    exclude: [...configDefaults.exclude, 'build/**', 'dist/**', 'lib/**'],
  },
})
