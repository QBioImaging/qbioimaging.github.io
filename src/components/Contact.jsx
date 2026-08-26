import { social } from '../data/site'

function Contact() {
  return (
    <section id="contact">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>Keep in Touch:</h2>
            </div>
            <div className="col-lg-8">
              <ul className="list-inline banner-social-buttons">
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
    </section>
  )
}

export default Contact
