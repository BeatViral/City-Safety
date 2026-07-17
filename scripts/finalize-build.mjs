import { access, rename } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const sourceHtml = join(projectRoot, 'dist', 'index.source.html')
const productionHtml = join(projectRoot, 'dist', 'index.html')

await access(sourceHtml)
await rename(sourceHtml, productionHtml)
