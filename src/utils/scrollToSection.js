function getNavHeight() {
  const nav = document.querySelector('.site-nav')
  if (!nav) {
    const fallback = getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height')
      .trim()
    return Number.parseFloat(fallback) || 96
  }

  return nav.getBoundingClientRect().height
}

const scrollAliases = {
  '#software': '#research',
}

export function scrollToSection(href) {
  const scrollHref = scrollAliases[href] ?? href
  const target = document.querySelector(scrollHref)
  if (!target) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = window.scrollY + target.getBoundingClientRect().top - getNavHeight()

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced ? 'auto' : 'smooth',
  })

  if (window.location.hash !== href) {
    window.history.replaceState(null, '', href)
  }

  window.dispatchEvent(new Event('hashchange'))
}
