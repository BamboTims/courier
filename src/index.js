import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hhklvyn3gxkfba7d.us.auth0.com"
      clientId="UwalIF2yINQuc3zUXvMKVpG5LSsWSFTx"
      redirectUri={`${window.location.origin}/dashboard`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
