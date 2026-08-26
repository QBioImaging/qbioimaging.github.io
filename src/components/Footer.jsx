import { Mail } from 'lucide-react'
import { footer } from '../data/layout/footer'
import '../styles/footer.css'

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const socialIcons = {
  linkedin: IconLinkedIn,
  github: IconGitHub,
  mail: Mail,
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a href="/#home" className="site-footer__logo-link">
              <img
                className="site-footer__logo"
                src={footer.logo}
                alt={footer.logoAlt}
                width={220}
                height={88}
              />
            </a>
            <p className="site-footer__tagline">{footer.tagline}</p>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__heading">{footer.contact.title}</p>
            <div className="site-footer__contact">
              {footer.contact.lines.map((line) => (
                <p key={line} className="site-footer__contact-line">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__heading">{footer.links.title}</p>
            <ul className="site-footer__links">
              {footer.links.items.map((item) => (
                <li key={item.href}>
                  <a className="site-footer__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__aside">
            <div className="site-footer__partners">
              {footer.partners.map((partner) => (
                <a
                  key={partner.src}
                  className="site-footer__partner"
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                  />
                </a>
              ))}
            </div>

            <ul className="site-footer__social">
              {footer.social.map((item) => {
                const Icon = socialIcons[item.icon]
                const isMail = item.icon === 'mail'
                return (
                  <li key={item.id}>
                    <a
                      className="site-footer__social-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      {Icon ? (
                        isMail ? (
                          <Icon size={16} strokeWidth={2} aria-hidden="true" />
                        ) : (
                          <Icon />
                        )
                      ) : null}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <p className="site-footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
