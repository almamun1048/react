import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
        <BrowserRouter>
        <NavBar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/about" element={<About />}/>
              <Route path="*" element={<Error />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
