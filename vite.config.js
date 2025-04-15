import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// შეცვალე ქვემოთ `"Bookmark-landing-page"` შენი GitHub repo-ს სახელით ზუსტად
export default defineConfig({
  base: '/Bookmark-landing-page/',
  plugins: [react()],
})
