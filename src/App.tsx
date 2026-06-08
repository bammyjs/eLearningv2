import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { IS_COMING_SOON } from './config/site';
import ComingSoon from './pages/ComingSoon';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Security = lazy(() => import('./pages/Security'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const Careers = lazy(() => import('./pages/Careers'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SuccessStoryAAUA = lazy(() => import('./pages/SuccessStoryAAUA'));

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
  if (IS_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-white text-slate-800 font-sans antialiased dark:bg-background dark:text-foreground/80">
        <Header />
        <div className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/features" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/success-stories/aaua" element={<SuccessStoryAAUA />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
