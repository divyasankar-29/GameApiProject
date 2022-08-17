import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageError";
import "./components/main.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Details from "./components/Details";

class App extends React.Component {
  render() {
    const clientId = "1055710802424-gsvuc291j0lopunlq8io2u3mqv8fn7p1.apps.googleusercontent.com";
    return (
      <div>
        <ErrorBoundary>
          <BrowserRouter>
            <Header />

            <Routes>
                  <Route path="/signup" element={<SignUp clientId={clientId}/>} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;