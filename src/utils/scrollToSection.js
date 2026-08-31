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

export function scrollToSection(href) {
  const target = document.querySelector(href)
  if (!target) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = window.scrollY + target.getBoundingClientRect().top - getNavHeight()

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced ? 'auto' : 'smooth',
  })
}
