import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import LandingPage from './pages/LandingPage';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PolicyPages from './pages/PolicyPages.jsx';
import Service from './pages/Service';
import Sports from './pages/Sports';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PolicyPages />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
