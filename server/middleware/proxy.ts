import process from 'node:process'
import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  if (!event.path.includes(`${process.env.NUXT_PUBLIC_CMS_PROXY_URL}`))
    return

  const path = event.path.replace(`${process.env.NUXT_PUBLIC_CMS_PROXY_URL}`, '')
  const target = joinURL(`${process.env.NUXT_PUBLIC_CMS_URL}`, '', path)

  return proxyRequest(event, target)
})
