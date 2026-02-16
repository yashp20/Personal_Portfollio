import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Background3D from './components/animations/Background3D';
import StarField from './components/animations/StarField';
import ScrollProgress from './components/animations/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Animated backgrounds */}
        <div className="fixed inset-0 bg-gradient-to-br from-dark via-darker to-dark animate-gradient-flow" 
             style={{ backgroundSize: '400% 400%' }} />
        <StarField />
        <Background3D />
        <ScrollProgress />

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
