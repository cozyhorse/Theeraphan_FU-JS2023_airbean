import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // https://vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@import "../../styles/variables.scss"',
          '',
        ].join(";"),
      },
    },
  },
})
