import React, { useState } from "react";
import SignUp from "./components/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import SignIn from "./components/SignIn";
import Home from "./components/Home";

export default function App() {
  const [formData, setFormData] = useState();

  return (
    <div className="form-container">
      <Routes> 
        <Route path="/signup" element={<SignUp setFormData={setFormData} />} />
        <Route path="/signin" element={<SignIn formData={formData} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp setFormData={setFormData} />} />
      </Routes>
    </div>
  );
}
