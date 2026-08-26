import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PublicationsPage from './pages/PublicationsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/publications" element={<PublicationsPage />} />
    </Routes>
  )
}

export default App
