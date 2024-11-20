import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./pages/Login/LoginPage"
import Signup from "./pages/SignUp/SignUp"
import LandingPage from "./pages/LandingPage/LandingPage";
import SendEmail from "./pages/SendEmail/SendEmail";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
