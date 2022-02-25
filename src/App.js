import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignupCard from "./components/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign-up" element={<SignupCard />} />
      </Routes>
    </div>
  );
}

export default App;
