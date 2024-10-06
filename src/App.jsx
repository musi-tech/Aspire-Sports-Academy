// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PolicyPages from './pages/PolicyPages.jsx';
import Service from './pages/Service';
import Sports from './pages/Sports';
import Membership from './pages/Membership';
import Contact from './pages/Contact';




function App() {
  return (
    <Routes>
      <Route path="/service" element={<Service />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PolicyPages />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

