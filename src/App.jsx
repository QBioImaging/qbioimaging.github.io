import { Routes, Route } from 'react-router-dom'
import AetherRibbonMesh from './components/AetherRibbonMesh'
import HomePage from './pages/HomePage'
import PublicationsPage from './pages/PublicationsPage'

function App() {
  return (
    <>
      <AetherRibbonMesh />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
