import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Team = lazy(() => import('./pages/Team'));
const Security = lazy(() => import('./pages/Security'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const Careers = lazy(() => import('./pages/Careers'));

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="rounded-full border border-foreground/10 bg-surface/70 px-5 py-3 text-sm text-foreground/70">
        Loading page...
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground/80 font-sans antialiased">
        <Header />
        <div className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/team" element={<Team />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
