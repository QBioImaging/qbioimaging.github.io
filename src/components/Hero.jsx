import { site, social } from '../data/site'

function Hero() {
  return (
    <section id="home">
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>{site.title}</h1>
                <h3>{site.subTitle}</h3>
                <hr className="intro-divider" />
                <ul className="list-inline intro-social-buttons">
                  {social.map((item) => (
                    <li key={item.title}>
                      <a href={item.url} className="btn btn-default btn-lg">
                        <i className={`fa fa-${item.title} fa-fw`}></i>{' '}
                        <span className="network-name">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
