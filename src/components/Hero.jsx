import { hero } from '../data/hero'
import HeroWave from './HeroWave'
import '../styles/hero.css'

function Hero() {
  return (
    <section id="home" className="hero lab-section lab-section--first">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {hero.heading.map((line) => (
              <span key={line} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__tagline">
            {hero.tagline.map((line) => (
              <span key={line} className="hero__tagline-line">
                {line}
              </span>
            ))}
          </p>
          <p className="hero__body">{hero.body}</p>
          <ul className="hero__pills">
            {hero.pills.map((pill) => (
              <li key={pill.label}>
                <span className={`hero__pill hero__pill--${pill.variant}`}>{pill.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero__media">
          <img className="hero__photo" src={hero.media.src} alt={hero.media.alt} />
          <figcaption className="hero__caption">
            <p className="hero__caption-title">{hero.media.caption}</p>
            <p className="hero__caption-meta">{hero.media.meta}</p>
          </figcaption>
        </figure>
      </div>

      <HeroWave />
    </section>
  )
}

export default Hero
