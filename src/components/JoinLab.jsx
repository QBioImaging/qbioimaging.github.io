import { join } from '../data/join'
import '../styles/join.css'

function JoinLab() {
  return (
    <section id="contact" className="join lab-section">
      <div className="join__inner">
        <div className="join__top">
          <div className="join__copy">
            <p className="join__eyebrow">{join.eyebrow}</p>
            <h2 className="join__heading">{join.heading}</h2>
            <p className="join__body">{join.body}</p>
            <div className="join__actions">
              <a
                className="btn-lab join__cta"
                href={join.cta.href}
                target="_blank"
                rel="noreferrer"
              >
                {join.cta.label}
              </a>
              <p className="join__hint">{join.hint}</p>
            </div>
          </div>

          <figure className="join__media">
            <img
              className="join__image"
              src={join.media.src}
              alt={join.media.alt}
            />
            <figcaption className="join__caption">{join.media.caption}</figcaption>
          </figure>
        </div>

        <ul className="join__pathways">
          {join.pathways.map((path) => (
            <li key={path.number} className="join__pathway">
              <span className="join__pathway-number">{path.number}</span>
              <div className="join__pathway-content">
                <h3 className="join__pathway-title">{path.title}</h3>
                <p className="join__pathway-body">{path.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default JoinLab
