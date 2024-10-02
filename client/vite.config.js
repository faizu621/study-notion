import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [visualizer()],
  build:{
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/avgRating.js'],
          Images:['./src/assets/Images/banner.mp4'],
          Cart:['./src/components/core/Dasboard/Cart/index.jsx'],
          reducers:['./src/reducers/index.js']
          // Add other chunks as needed
        },
      },
    },
  }
})


