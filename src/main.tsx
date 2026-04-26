import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>
  </HelmetProvider>
)
