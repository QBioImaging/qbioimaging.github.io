import { researchPosts } from '../data/research'

function Research() {
  return (
    <section id="research">
      {researchPosts.map((post, index) => {
        const odd = index % 2 === 0
        return (
          <div key={post.title} className={odd ? 'content-section-a' : 'content-section-b'}>
            <div className="container">
              <div className="row">
                <div
                  className={
                    odd
                      ? 'col-lg-5 col-sm-6'
                      : 'col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6'
                  }
                >
                  <hr className="section-heading-spacer" />
                  <div className="clearfix"></div>
                  <h2 className="section-heading">{post.title}</h2>
                  <div className="lead" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </div>
                <div
                  className={
                    odd
                      ? 'col-lg-5 col-lg-offset-2 col-sm-6'
                      : 'col-lg-5 col-sm-pull-6 col-sm-6'
                  }
                >
                  <img className="img-responsive" src={post.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Research
