import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './nav/Navbar';


createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <StrictMode>
        <Navbar></Navbar>
      </StrictMode>
    </BrowserRouter>
  </HelmetProvider>
)
