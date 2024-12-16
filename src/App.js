import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./pages/Login/LoginPage";
import Signup from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import SendEmail from "./pages/SendEmail/SendEmail";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PricingPlans from "./Components/Subscription/PricingPlans";
import Billing from "./Components/Subscription/Billing";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess";
import PaymentFailure from "./Components/FailurePage/FailurePage";

const AppRoutes = ({ isAuthenticated, user }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/send-email" element={<SendEmail />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-failure" element={<PaymentFailure />} />
      <Route path="/dashboard/subscription" element={<PricingPlans />} />
      <Route path="/dashboard/billing" element={<Billing />} />
      <Route
        path="/dashboard/*"
        element={
          isAuthenticated && user ? (
            user?.subscription?.isActive ? (
              <Dashboard />
            ) : (
              <Navigate to="/dashboard/subscription" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const response = await fetch(
          "https://ecomlenz-erafh6dqcbhac9fz.canadacentral-01.azurewebsites.net/auth/load-current-user",
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        setUser(data.user);
        setAuthenticated(!!data.user);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadCurrentUser();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="261613494571-8v4fcbo9tbufnincr0ru9c4m52f025il.apps.googleusercontent.com">
        <AppRoutes isAuthenticated={isAuthenticated} user={user} />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
