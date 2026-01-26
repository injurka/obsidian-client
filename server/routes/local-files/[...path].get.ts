import fs from 'node:fs'
import path from 'node:path'

function getMimeType(filename: string) {
  const ext = path.extname(filename).toLowerCase()
  const map: Record<string, string> = {
    '.json': 'application/json',
    '.md': 'text/markdown; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.css': 'text/css',
    '.js': 'application/javascript',
  }
  return map[ext] || 'application/octet-stream'
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public
  const basePath = config.fsBasePath

  if (!basePath) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Local file system mode not configured',
    })
  }

  const reqPath = decodeURIComponent(event.context.params?.path || '')
  const fullPath = path.join(basePath, reqPath)

  if (!fs.existsSync(fullPath)) {
    console.error(`[404] File not found: ${fullPath}`)
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  const stat = fs.statSync(fullPath)
  if (!stat.isFile()) {
    throw createError({ statusCode: 404, statusMessage: 'Not a file' })
  }

  const mimeType = getMimeType(fullPath)
  setResponseHeader(event, 'Content-Type', mimeType)

  return sendStream(event, fs.createReadStream(fullPath))
})
