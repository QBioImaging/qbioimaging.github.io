import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Research from '../components/Research'
import ResearchUpdates from '../components/ResearchUpdates'
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
      <ResearchUpdates />
      <PublicationsTeaser />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
