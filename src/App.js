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
import MoreDetails from "./components/MoreDetails";
import BackEnd from "./components/Backend";
import BackendDetails from "./components/BackendDetails";
import ErrorPage from "./components/ErrorPage";
import Privacy from "./components/Privacy";


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


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
            <Route path="frontend" element={<FrontEnd/>}>
              <Route path=":userId" element={<MoreDetails/>}/>
            </Route>
            <Route path="backend" element={<BackEnd/>}>
              <Route path=':userId' element={<BackendDetails/> }/>
            </Route>
          </Route>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="*"  element={<ErrorPage/>}/>
        </Routes>
      </AuthContextProvider>
      </ApiContextProvider>

    </div>
  );
}
