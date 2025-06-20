import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Challenges from './challenges/Challenges.tsx';
import './index.css';
import './style/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="coding-challenges/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="challenge">
          <Route path="star-rating" element={<Challenges />} />
        </Route>
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
