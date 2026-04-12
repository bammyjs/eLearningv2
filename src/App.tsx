import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Team from './pages/Team';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground/80 font-sans antialiased">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
