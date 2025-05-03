import { defineConfig } from 'vite' /* Facilitador */
import { join } from 'node:path'

export default defineConfig ({
    root: join(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    }
})