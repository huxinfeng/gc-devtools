import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'gc-devtools',
  },
  verifyCommit: {
    allowEmoji: true,
  },
});
