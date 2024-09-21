import React, { useState } from "react";
import SignUp from "./components/SignUp";
import "./App.css";
import { Switch,Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
export default function App() {
  const [formData, setFormData] = useState();
  return (
    <>
    <div className="form-container">
      <Switch>
        <Route path="/signup">
          <SignUp setFormData={setFormData} />
        </Route>
        <Route path="/signin">
          <SignIn formData={formData} />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/" exact>
        <SignUp setFormData={setFormData} />
        </Route>
      </Switch>
    </div>
    </>
  );
}
