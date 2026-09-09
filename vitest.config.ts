import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    exclude: ['.opencode/**', 'e2e/**', 'node_modules/**', 'dist/**'],
  },
});
