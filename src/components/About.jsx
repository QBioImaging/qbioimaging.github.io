import { about } from '../data/about'
import SectionWaveDivider from './SectionWaveDivider'
import '../styles/about.css'

function About() {
  return (
    <section id="about" className="about lab-section">
      <div className="about__inner">
        <div className="about__main">
          <div className="about__header">
            <p className="about__eyebrow">{about.eyebrow}</p>
            <h2 className="about__heading">
              {about.heading.map((line) => (
                <span key={line} className="about__heading-line">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="about__body">
            <p className="about__statement">{about.statement}</p>
            <div className="about__accent" aria-hidden="true" />
            <p className="about__note">{about.note}</p>
          </div>
        </div>

        <aside className="about__panel">
          <p className="about__panel-label">{about.panel.label}</p>
          <p className="about__panel-intro">{about.panel.intro}</p>
          <div className="about__panel-divider" aria-hidden="true" />
          <ul className="about__principles">
            {about.panel.principles.map((principle) => (
              <li key={principle.number} className="about__principle">
                <span className="about__principle-number">{principle.number}</span>
                <div className="about__principle-content">
                  <h3 className="about__principle-title">{principle.title}</h3>
                  <p className="about__principle-body">{principle.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <SectionWaveDivider />
    </section>
  )
}

export default About
