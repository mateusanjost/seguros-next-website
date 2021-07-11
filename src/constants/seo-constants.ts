export const getURL = (): string => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000'
  return url.includes('http') ? url : `https://${url}`
}

const DEFAULT_TITLE = ''
const DEFAULT_TITLE_TEMPLATE = 'MAR DEL PLATA | %s'
const DEFAULT_DESCRIPTION =
  'Seguros website  - development by Paranhos'
const DEFAULT_CANONICAL = getURL()
const SITE_NAME = 'MAR DEL PLATA'
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/preview.png`
const TWITTER_HANDLE = '@pbteja1998'
const TWITTER_CARD_TYPE = 'summary_large_image'
const FAVICON_LINK = '/favicon.ico'

export const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  TWITTER_CARD_TYPE,
  FAVICON_LINK,
}
