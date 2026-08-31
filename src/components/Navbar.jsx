import { useEffect, useState } from 'react'
import { site } from '../data/layout/site'
import { scrollToSection } from '../utils/scrollToSection'
import '../styles/navbar.css'

function isNarrowNav() {
  return window.matchMedia('(max-width: 1024px)').matches
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [expanded, setExpanded] = useState('')

  useEffect(() => {
    const sections = site.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setExpanded('')
      if (open) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const goTo = (href) => {
    scrollToSection(href)
    setExpanded('')
    setOpen(false)
  }

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a
          className="site-nav__brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            goTo('#home')
            event.currentTarget.blur()
          }}
        >
          <img src={site.logo} alt={site.logoAlt} className="site-nav__logo" />
        </a>

        <button
          type="button"
          className={`site-nav__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="site-nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => {
            setExpanded('')
            setOpen((value) => !value)
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-nav-menu"
          className={`site-nav__menu${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__links">
            {site.navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length)
              const isExpanded = expanded === link.href
              const isActive =
                active === link.href ||
                link.children?.some((child) => child.href === active || window.location.hash === child.href)

              return (
                <li
                  key={link.href}
                  className={`site-nav__item${hasChildren ? ' site-nav__item--has-children' : ''}${isExpanded ? ' is-expanded' : ''}`}
                  onMouseEnter={() => {
                    if (hasChildren && !isNarrowNav()) setExpanded(link.href)
                  }}
                  onMouseLeave={() => {
                    if (hasChildren && !isNarrowNav()) setExpanded('')
                  }}
                  onFocusCapture={() => {
                    if (hasChildren && !isNarrowNav()) setExpanded(link.href)
                  }}
                  onBlurCapture={(event) => {
                    if (hasChildren && !isNarrowNav() && !event.currentTarget.contains(event.relatedTarget)) {
                      setExpanded('')
                    }
                  }}
                >
                  <a
                    className={`site-nav__link${isActive ? ' is-active' : ''}`}
                    href={link.href}
                    aria-haspopup={hasChildren ? 'true' : undefined}
                    aria-expanded={hasChildren ? isExpanded : undefined}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      if (hasChildren && isNarrowNav()) {
                        setExpanded((current) => (current === link.href ? '' : link.href))
                        return
                      }
                      goTo(link.href)
                      event.currentTarget.blur()
                    }}
                  >
                    {link.label}
                    {hasChildren ? <span className="site-nav__chevron" aria-hidden="true" /> : null}
                  </a>

                  {hasChildren ? (
                    <ul className="site-nav__dropdown" role="list">
                      {link.children.map((child) => (
                        <li key={`${link.href}-${child.href}-${child.label}`}>
                          <a
                            className="site-nav__sublink"
                            href={child.href}
                            onClick={(event) => {
                              event.preventDefault()
                              goTo(child.href)
                              event.currentTarget.blur()
                            }}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <a
            className="btn-lab site-nav__cta"
            href={site.cta.href}
            onClick={(event) => {
              event.preventDefault()
              goTo(site.cta.href)
              event.currentTarget.blur()
            }}
          >
            {site.cta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
