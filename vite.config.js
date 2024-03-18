import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,
    proxy:{
      "/api":{
        target:"https://chat-microservice-9gcv.onrender.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
      }
    }
    // proxy:{
    //   "/api":'http://localhost:3112'
    // }
   
   },
   build:{
    commonjsOptions:{
      transformMixedEsModules:true
    }
   }
})
