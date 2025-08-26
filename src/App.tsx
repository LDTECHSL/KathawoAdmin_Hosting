import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Login from "./Pages/LoginPage"; // Import your login page
import Landing from "./Pages/LandingPage";
import Toast from "./Components/Toast";
import Stickers from "./Pages/stickers/Stickers";

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
            <Route path="/stickers" element={<Stickers />} />
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
