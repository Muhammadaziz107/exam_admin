import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Orders from "./Components/orders/orders";
import Users from "./Components/users/users";
import Intro from "./Components/intro/intro";
import Types from "./Components/types/types";
// import Login from "./Pages/login/login";

function App() {
  return (
    <div className="app">
      <div className="App">
        <Home />
      </div>

      <Routes>
        <Route path="/" element={<Intro />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/types" element={<Types />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}
export default App;
