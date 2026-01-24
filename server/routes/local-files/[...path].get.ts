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
  const config = useRuntimeConfig()
  const basePath = config.fsBasePath

  if (!basePath) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Local file system mode not configured',
    })
  }

  // Получаем путь из URL
  const reqPath = event.context.params?.path || ''

  // Собираем полный путь внутри контейнера
  // Например: /app/data + /content/nav.json
  const fullPath = path.join(basePath, reqPath)

  // ЗАЩИТА: Проверяем, что путь все еще внутри basePath (защита от Path Traversal ../../)
  if (!fullPath.startsWith(basePath)) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  // Проверяем существование файла
  if (!fs.existsSync(fullPath)) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  // Проверяем, что это файл, а не папка
  const stat = fs.statSync(fullPath)
  if (!stat.isFile()) {
    throw createError({ statusCode: 404, statusMessage: 'Not a file' })
  }

  // Устанавливаем правильный заголовок Content-Type
  const mimeType = getMimeType(fullPath)
  setResponseHeader(event, 'Content-Type', mimeType)

  // Отдаем файл как поток
  return sendStream(event, fs.createReadStream(fullPath))
})
