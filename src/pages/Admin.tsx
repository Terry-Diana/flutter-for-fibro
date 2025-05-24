
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Mock authentication - replace with actual auth logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === "admin@fibroawareness.com" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      throw new Error("Invalid credentials");
    }
    
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return (
    <AdminLogin 
      onLogin={handleLogin} 
      isLoading={isLoading}
    />
  );
};

export default Admin;
