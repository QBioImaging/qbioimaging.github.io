function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li>
                <a href="#home">Home</a>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <a href="#about">About</a>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <a href="#research">Research</a>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <p className="copyright text-muted small">Copyright &copy; QBI All Rights Reserved</p>
          </div>
          <div className="col-md-6">
            <p>
              Quantitative Bio-Imaging Lab @CCMAR, Gambelas Campus, University of Algarve, 8005-139
              Faro, Portugal
            </p>
            <p>
              🗺️ <a href="https://goo.gl/maps/qBZkzfLUdkqQ5XaF6"> MAP </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
