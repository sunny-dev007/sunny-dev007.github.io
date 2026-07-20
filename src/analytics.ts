import { analyticsConfig } from './data'

/**
 * Lightweight GA4 wrapper for a static portfolio.
 *
 * What gets tracked once a Measurement ID is configured in data.ts:
 *  - page_view          automatic (visitors, geography, device, referrer)
 *  - portfolio_click    every outbound link (GitHub, LinkedIn, email) and
 *                       any element carrying a data-track attribute
 *  - project_filter     which project filter chips visitors use
 *  - section_view       which sections a visitor actually scrolls to
 *
 * With no ID configured this module does nothing: no script, no cookies.
 */

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let enabled = false

export function trackEvent(name: string, params: Record<string, string | number>) {
  if (enabled && window.gtag) window.gtag('event', name, params)
}

function wireDelegatedClicks() {
  document.addEventListener(
    'click',
    (e) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('a, button')
      if (!el) return
      const href = el.getAttribute('href') ?? ''
      const external = href.startsWith('http') || href.startsWith('mailto:')
      if (!external && !el.dataset.track) return
      trackEvent('portfolio_click', {
        label: el.dataset.track || el.textContent?.trim().slice(0, 60) || 'unknown',
        href,
        section: el.closest('section')?.id ?? 'nav',
      })
    },
    { capture: true },
  )
}

function wireSectionViews() {
  const seen = new Set<string>()
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        const id = (en.target as HTMLElement).id
        if (en.isIntersecting && !seen.has(id)) {
          seen.add(id)
          trackEvent('section_view', { section_id: id })
        }
      }
    },
    { threshold: 0.35 },
  )
  document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
}

export function initAnalytics() {
  const id = analyticsConfig.gaMeasurementId
  if (!id || !id.startsWith('G-')) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  // GA requires the Arguments object (not an array) to be pushed.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { anonymize_ip: true })

  enabled = true
  wireDelegatedClicks()
  wireSectionViews()
}
