import { news } from '../data/news'
import SectionWaveDivider from './SectionWaveDivider'
import '../styles/research-updates.css'

function ResearchUpdates() {
  return (
    <section id="news" className="research-updates lab-section">
      <div className="research-updates__inner">
        <div className="research-updates__intro">
          <p className="research-updates__eyebrow">{news.eyebrow}</p>
          <h2 className="research-updates__heading">{news.heading}</h2>
          <p className="research-updates__description">{news.description}</p>
          <div className="research-updates__rule" aria-hidden="true" />
          <p className="research-updates__meta-label">{news.metaLabel}</p>
          <p className="research-updates__meta-text">{news.metaText}</p>
          <a className="btn-lab research-updates__cta" href={news.cta.href}>
            {news.cta.label}
          </a>
        </div>

        <ol className="research-updates__list">
          {news.items.map((item) => (
            <li key={item.number} className="research-updates__item">
              <div className="research-updates__meta">
                <span className="research-updates__number">{item.number}</span>
                <div className="research-updates__meta-copy">
                  <p className="research-updates__category">{item.category}</p>
                  <p className="research-updates__date">{item.date}</p>
                </div>
              </div>
              <div className="research-updates__content">
                <h3 className="research-updates__title">{item.title}</h3>
                <p className="research-updates__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <SectionWaveDivider />
    </section>
  )
}

export default ResearchUpdates
