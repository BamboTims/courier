import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import clientConfig from "./convex.json";
import App from "./App";
import "./index.css";

const convex = new ConvexReactClient(clientConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <Auth0Provider
        domain="dev-hhklvyn3gxkfba7d.us.auth0.com"
        clientId="8Nfxq6DqEjOR7VTNTjwm7h8pfDNVDwj7"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ConvexProvider>
  </React.StrictMode>
);
