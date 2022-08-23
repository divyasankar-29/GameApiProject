import React ,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageError";
import "./components/main.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Details from "./components/Details";

  console.log(process.env.REACT_APP_API_KEY);

function App(){
    const clientId = "1055710802424-gsvuc291j0lopunlq8io2u3mqv8fn7p1.apps.googleusercontent.com";
    const [isLoggedIn,setLogin] = useState(false)
    const [googleLogin,setGoogleLogin] = useState(false)

    return (
      <div>
        <ErrorBoundary>
          <BrowserRouter>
            <Header clientId={clientId} isLoggedIn={isLoggedIn} setLogin={setLogin} 
            googleLogin={googleLogin} setGoogleLogin={setGoogleLogin}/>

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/home/details/:id" element={<Details />} />
              <Route path="/" element={<SignUp clientId={clientId} setLogin={setLogin}/>} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }

export default App;