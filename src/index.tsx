import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App';
import 'index.css';

const domElement = document.getElementById('root')!;
const root = createRoot(domElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
