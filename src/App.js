import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./components/AuthContext";
import Account from "./components/Account";
import Hub from "./components/Hub";
import IndexPage from "./components/IndexPage";
import FrontEnd from "./components/FrontEnd";
import { ApiContextProvider } from "./components/ApiContext";

export default function App() {
  return (
    <div className="App">
      <ApiContextProvider>

      <AuthContextProvider>

        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<Hub/>}>
            <Route index element={<IndexPage/>}/>
            <Route path="frontend" element={<FrontEnd/>}/>
          </Route>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
      </ApiContextProvider>

    </div>
  );
}
