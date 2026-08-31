import { useEffect, useState } from 'react'
import { site } from '../data/layout/site'
import { scrollToSection } from '../utils/scrollToSection'
import '../styles/side-nav.css'

function SideNavConnector({ active }) {
  return (
    <div
      className={`side-nav__connector${active ? ' is-active' : ''}`}
      aria-hidden="true"
    >
      <svg
        className="side-nav__wave"
        viewBox="0 0 24 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="side-nav__wave-path side-nav__wave-path--back"
          d="M12 0 C20 12 4 24 12 36 C20 48 4 60 12 72"
        />
        <path
          className="side-nav__wave-path side-nav__wave-path--mid"
          d="M12 0 C4 12 20 24 12 36 C4 48 20 60 12 72"
        />
        <path
          className="side-nav__wave-path side-nav__wave-path--front"
          d="M12 0 C18 12 6 24 12 36 C18 48 6 60 12 72"
        />
      </svg>
    </div>
  )
}

function SideNav() {
  const [active, setActive] = useState('')
  const links = site.sideNavLinks

  useEffect(() => {
    const sections = site.sideNavLinks
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
      { rootMargin: '-45% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const activeIndex = links.findIndex((link) => link.href === active)

  return (
    <nav className="side-nav" aria-label="Section navigation">
      <div className="side-nav__rail">
        <ol className="side-nav__list">
          {links.map((link, index) => (
            <li key={link.href} className="side-nav__segment">
              <SideNavConnector active={activeIndex >= index} />
              <a
                className={`side-nav__link${active === link.href ? ' is-active' : ''}`}
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.href)
                  event.currentTarget.blur()
                }}
              >
                <span className="side-nav__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default SideNav
