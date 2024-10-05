// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PolicyPages from './pages/PolicyPages.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PolicyPages />} />
    </Routes>
  );
}

export default App;

