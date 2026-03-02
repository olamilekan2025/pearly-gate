import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext"; // Import your provider here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* The Provider must wrap App to share the 'users' and 'login' logic */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);