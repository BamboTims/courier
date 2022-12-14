import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/main.page";
import Dashboard from "./pages/dashboard/dashboard.page.jsx";
import Booking from "./pages/booking/booking.page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
