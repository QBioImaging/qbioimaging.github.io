import { Link } from 'react-router-dom'
import homePublicationsHtml from '../data/home-publications.html?raw'

function PublicationsTeaser() {
  return (
    <section id="publications" className="container">
      <div className="content-section-b">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
              <hr className="section-heading-spacer" />
              <div className="clearfix"></div>
              <h2 className="section-heading">Publications 📰</h2>
              <div className="lead">
                <p>QBI's journal publications and conference proceedings</p>
                <p>
                  <Link to="/publications">&#128073; Full list</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-sm-pull-6 col-sm-6">
              <img className="img-responsive" src="/img/services/publications.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-lg">
          <br />
          <div dangerouslySetInnerHTML={{ __html: homePublicationsHtml }} />
        </div>
      </div>
    </section>
  )
}

export default PublicationsTeaser
