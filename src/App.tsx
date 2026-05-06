import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Portfolio from './Portfolio';
import VeriffBusinessCase from './pages/VeriffBusinessCase';
import VeriffInterviewIntro from './pages/VeriffInterviewIntro';
import VeriffDossier from './pages/VeriffDossier';
import { useEffect } from 'react';

/** Old URLs were /veriff-business-case/:section — now /veriff-business-case/case/:section */
function VeriffLegacyDossierRedirect() {
  const { legacySection } = useParams();
  if (!legacySection || legacySection === "case") {
    return <Navigate to="/veriff-business-case/case" replace />;
  }
  return <Navigate to={`/veriff-business-case/case/${legacySection}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio page="home" />} />
        <Route path="/sobre-mim" element={<Portfolio page="about" />} />
        <Route path="/cases" element={<Portfolio page="cases" />} />
        <Route path="/recommendations" element={<Portfolio page="recommendations" />} />
        <Route path="/contato" element={<Portfolio page="contact" />} />
        <Route path="/ai-tool-kit" element={<Portfolio page="aiToolkit" />} />
        {/* Veriff submission: presenter intro → dossier (nested URLs) */}
        <Route path="/veriff-business-case/case/:section" element={<VeriffDossier />} />
        <Route path="/veriff-business-case/case" element={<VeriffDossier />} />
        <Route path="/veriff-business-case" element={<VeriffInterviewIntro />} />
        <Route path="/veriff-business-case/:legacySection" element={<VeriffLegacyDossierRedirect />} />
        {/* Legacy prototype page (kept separate) */}
        <Route path="/veriff-identity-case" element={<VeriffBusinessCase />} />
      </Routes>
    </BrowserRouter>
  );
}
