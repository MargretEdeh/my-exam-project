import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./components/AuthContext";
import Account from "./components/Account";
import Hub from "./components/Hub";

export default function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<Hub/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
