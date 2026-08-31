import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Research from '../components/Research'
import ResearchUpdates from '../components/ResearchUpdates'
import PublicationsHighlights from '../components/PublicationsHighlights'
import JoinLab from '../components/JoinLab'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <SideNav />
      <Hero />
      <About />
      <Research />
      <ResearchUpdates />
      <PublicationsHighlights />
      <JoinLab />
      <Footer />
    </>
  )
}

export default HomePage
