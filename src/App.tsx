import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Layouts/Navbar"; // Adjust the path as needed
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/StatPage";
import Details from "./Pages/DetailsPage";
import Login from "./Pages/LoginPage"; // Import your login page
import Landing from "./Pages/LandingPage";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import FeedbackPage from "./Pages/Feedback";
import Toast from "./Components/Toast";

const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
    <Toast />
      {!isLoginPage ? (
        <Navbar>
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </Navbar>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login page route */}
        </Routes>
      )}
    </>
  );
};

export default App;
