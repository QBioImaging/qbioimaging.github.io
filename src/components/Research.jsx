import { useEffect, useId, useState } from 'react'
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  ChartColumn,
  Microscope,
} from 'lucide-react'
import { research } from '../data/research'
import SectionWaveDivider from './SectionWaveDivider'
import '../styles/research.css'

const softwareIcons = {
  microscope: Microscope,
  activity: Activity,
  brain: Brain,
  'book-open': BookOpen,
  'chart-column': ChartColumn,
}

function SoftwareIcon({ name }) {
  const Icon = softwareIcons[name]
  if (!Icon) return null
  return <Icon className="software-card__glyph" size={22} strokeWidth={1.75} aria-hidden="true" />
}

function Research() {
  const [activeTab, setActiveTab] = useState(() =>
    window.location.hash === '#software' ? 'software' : 'research',
  )
  const baseId = useId()

  useEffect(() => {
    const applyHash = () => {
      if (window.location.hash === '#software') setActiveTab('software')
      if (window.location.hash === '#research') setActiveTab('research')
    }

    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  return (
    <section id="research" className="research lab-section">
      <div className="research__inner">
        <header className="research__header">
          <p className="research__eyebrow">{research.eyebrow}</p>
          <div className="research__header-row">
            <h2 className="research__heading">
              {research.heading.map((line) => (
                <span key={line} className="research__heading-line">
                  {line}
                </span>
              ))}
            </h2>
            <p className="research__intro">{research.intro}</p>
          </div>

          <div className="research__tabs" role="tablist" aria-label="Research sections">
            {research.tabs.map((tab) => {
              const selected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${tab.id}`}
                  className={`research__tab${selected ? ' research__tab--active' : ''}`}
                  aria-selected={selected}
                  aria-controls={tab.id === 'research' ? 'research-pillars' : 'software'}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => {
                    setActiveTab(tab.id)
                    window.history.replaceState(null, '', tab.id === 'software' ? '#software' : '#research')
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </header>

        <div
          id="research-pillars"
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-research`}
          className="research__panel"
          hidden={activeTab !== 'research'}
        >
          <div className="research__cards">
            {research.researchCards.map((card) => (
              <article key={card.id} className="research-card">
                <div className="research-card__media">
                  <img src={card.image} alt={card.imageAlt} className="research-card__image" />
                </div>
                <div className="research-card__body">
                  <p className="research-card__label">{card.label}</p>
                  <h3 className="research-card__question">{card.question}</h3>
                  <p className="research-card__text">{card.body}</p>
                  <div className="research-card__bar" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>

          <aside className="research__banner">
            <p className="research__banner-title">{research.banner.title}</p>
            <p className="research__banner-body">{research.banner.body}</p>
          </aside>
        </div>

        <div
          id="software"
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-software`}
          className="research__panel"
          hidden={activeTab !== 'software'}
        >
          <div className="software__intro">
            <p className="research__eyebrow">{research.software.eyebrow}</p>
            <h3 className="software__heading">{research.software.heading}</h3>
            <p className="software__lede">{research.software.intro}</p>
          </div>

          <div className="software__grid">
            {research.software.tools.map((tool) => (
              <article key={tool.id} className="software-card">
                <div className="software-card__icon" aria-hidden="true">
                  <SoftwareIcon name={tool.icon} />
                </div>
                <p className="software-card__category">{tool.category}</p>
                <h4 className="software-card__title">{tool.title}</h4>
                <p className="software-card__subtitle">{tool.subtitle}</p>
                <p className="software-card__body">{tool.body}</p>
                <a className="software-card__link" href={tool.href}>
                  Learn more
                  <ArrowRight className="software-card__link-icon" size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
      <SectionWaveDivider />
    </section>
  )
}

export default Research
