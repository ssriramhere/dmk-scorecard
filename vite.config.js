import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// NOTE: `base` must match your GitHub repo name when deployed to
// username.github.io/REPO_NAME/. If you deploy to a root domain
// (e.g. username.github.io or a custom domain), change `base` to '/'
export default defineConfig({
  plugins: [react()],
  base: '/dmk-scorecard/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
