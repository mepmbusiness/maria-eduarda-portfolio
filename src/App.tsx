import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import VeriffBusinessCase from './pages/VeriffBusinessCase';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/veriff-business-case" element={<VeriffBusinessCase />} />
      </Routes>
    </BrowserRouter>
  );
}
