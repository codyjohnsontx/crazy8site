import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage'
import SchedulePage from './components/SchedulePage/SchedulePage'
import DisciplinePage from './components/DisciplinePage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <NavBar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disciplines/:slug" element={<DisciplinePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
