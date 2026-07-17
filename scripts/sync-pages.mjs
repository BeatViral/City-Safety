import { copyFile, cp, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const distRoot = join(projectRoot, 'dist')
const assetsTarget = join(projectRoot, 'assets')

await mkdir(assetsTarget, { recursive: true })
await copyFile(join(distRoot, 'index.html'), join(projectRoot, 'index.html'))
await cp(join(distRoot, 'assets'), assetsTarget, { recursive: true })
