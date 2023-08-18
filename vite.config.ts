import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    svgLoader(),
    Unocss({
      /* options */
      configFile: 'unocss.config.ts',
    }),
  ],
  server: {
    port: 4000,
    host: '0.0.0.0',
    // proxy: {
    //   '/SL': {
    //     target: 'http://xxx.com/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/SL/, '')
    //   }
    // }
  },
})
