import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Research from '../components/Research'
import PublicationsTeaser from '../components/PublicationsTeaser'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <PublicationsTeaser />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
