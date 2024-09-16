import '@fontsource/roboto';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './components/Title';
import ImagePage from './components/ImagePage';
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImagePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
