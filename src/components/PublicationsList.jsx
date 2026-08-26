import journalArticlesHtml from '../data/publications/journal-articles.html?raw'
import conferenceProceedingsHtml from '../data/publications/conference-proceedings.html?raw'

function PublicationsList() {
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
          <div dangerouslySetInnerHTML={{ __html: journalArticlesHtml }} />
        </div>
      </div>

      <h4>Conference Proceedings</h4>
      <div className="row">
        <div className="col-lg-12 col-lg">
          <br />
          <div dangerouslySetInnerHTML={{ __html: conferenceProceedingsHtml }} />
        </div>
      </div>
    </section>
  )
}

export default PublicationsList
