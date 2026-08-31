import { Link } from 'react-router-dom'
import { publications } from '../data/publications'
import SectionWaveDivider from './SectionWaveDivider'
import '../styles/publications.css'

function PublicationsHighlights() {
  return (
    <section id="publications" className="publications lab-section">
      <div className="publications__inner">
        <header className="publications__header">
          <p className="publications__eyebrow">{publications.eyebrow}</p>
          <div className="publications__header-row">
            <h2 className="publications__heading">{publications.heading}</h2>
            <Link className="publications__view-all" to={publications.viewAll.to}>
              {publications.viewAll.label}
            </Link>
          </div>
        </header>

        <div className="publications__cards">
          {publications.cards.map((card) => (
            <article key={card.id} className="publications-card">
              <p className="publications-card__type">{card.type}</p>
              <h3 className="publications-card__title">{card.title}</h3>
              <p className="publications-card__body">{card.body}</p>
              <div className="publications-card__bar" aria-hidden="true" />
            </article>
          ))}
        </div>

        <aside className="publications__strip">
          <p className="publications__strip-text">{publications.strip.text}</p>
          <a className="btn-lab publications__strip-cta" href={publications.strip.cta.href}>
            {publications.strip.cta.label}
          </a>
        </aside>
      </div>
      <SectionWaveDivider />
    </section>
  )
}

export default PublicationsHighlights
