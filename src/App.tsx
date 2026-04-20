import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import VeriffBusinessCase from './pages/VeriffBusinessCase';
import { useEffect } from 'react';

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
        <Route path="/veriff-business-case" element={<VeriffBusinessCase />} />
      </Routes>
    </BrowserRouter>
  );
}
