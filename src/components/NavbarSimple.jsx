import { Link } from 'react-router-dom'
import { site } from '../data/layout/site'

function NavbarSimple() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header page-scroll">
          <Link className="navbar-brand page-scroll" to="/">
            {site.navTitle}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSimple
