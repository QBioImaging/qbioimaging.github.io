import { useEffect, useState } from 'react'
import { site } from '../data/layout/site'
import { scrollToSection } from '../utils/scrollToSection'
import '../styles/navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

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

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a
          className="site-nav__brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('#home')
            event.currentTarget.blur()
            setOpen(false)
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
          onClick={() => setOpen((value) => !value)}
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
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`site-nav__link${active === link.href ? ' is-active' : ''}`}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(link.href)
                    event.currentTarget.blur()
                    setOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn-lab site-nav__cta"
            href={site.cta.href}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection(site.cta.href)
              event.currentTarget.blur()
              setOpen(false)
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
