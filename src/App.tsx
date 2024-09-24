import '@fontsource/roboto';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ImagePage from './components/ImagePage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ImagePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Layout component to handle conditional NavBar and Logo rendering
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render NavBar */}
      {location.pathname !== '/' && (
        <>
          <NavBar />
          {/* Logo below the navbar */}
          <div className="logo-container">
            <img src="assets/crazy8logo.jpeg" alt="Logo" className="logo" />
          </div>
        </>
      )}
      <div className="content">{children}</div>
    </div>
  );
};

export default App;
