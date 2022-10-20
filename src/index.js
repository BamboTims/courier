import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-hhklvyn3gxkfba7d.us.auth0.com"
    clientId="8Nfxq6DqEjOR7VTNTjwm7h8pfDNVDwj7"
    redirectUri={"/"}
  >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

