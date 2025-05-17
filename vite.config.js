import { defineConfig } from 'vite' /* Facilitador */
import { join, resolve } from 'node:path'

export default defineConfig ({
    root: join(__dirname, 'src'),
    publicDir: join(__dirname, 'public'),
    build: {
        outDir: '../dist',
        rollupOptions : {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                placeholder: resolve(__dirname, 'src/placeholder.html')
            }
        }
    },
    server: {
        port: 8080
    }
})