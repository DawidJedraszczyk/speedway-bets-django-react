import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

const Logout = () => {
  localStorage.clear();
  return <Navigate to="/login" />;
};

const RegisterAndLogout = () => {
  localStorage.clear();
  return <Register />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/logout/" element={<Logout />} />
        <Route path="/register/" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
