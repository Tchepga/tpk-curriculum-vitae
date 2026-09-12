import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

type SeoLocale = 'fr' | 'en'

const SITE_URL = 'https://cv-tchepga-patrick.devcoorp.net/'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo() {
  const { locale, t } = useI18n()

  const apply = (lang: SeoLocale) => {
    const title = t('seo.title')
    const description = t('seo.description')

    document.title = title
    document.documentElement.lang = lang

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:locale', lang === 'fr' ? 'fr_FR' : 'en_US')
    upsertMeta('property', 'og:url', SITE_URL)
  }

  watch(
    locale,
    (lang) => apply((lang === 'en' ? 'en' : 'fr') as SeoLocale),
    { immediate: true },
  )
}
