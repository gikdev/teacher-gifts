import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import masterCSS from '@master/css.vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), masterCSS({})],
  base: "/teacher-gifts/",
})
