import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    // مهم للنشر (يمنع مشاكل المسارات)
    base: '/',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    define: {
      __GEMINI_API_KEY__: JSON.stringify(env.GEMINI_API_KEY),
    },
  }
})
