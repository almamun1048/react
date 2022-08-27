import React, { useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
//import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import User from './pages/User';
import About from './pages/About';
import Blog from './pages/Blog'
import AddBlogs from './pages/AddBlogs'
import Error from './pages/Error';
import ProtectPage from './pages/ProtectPage';

const App = () => {
  const [isLogedIn,setIsLogedIn] = useState(true);
  return (
    <BrowserRouter>
    <Navbar />
    {!isLogedIn ? <button onClick={()=>{setIsLogedIn(!isLogedIn)}}>Log-in</button> : <button onClick={()=>{setIsLogedIn(!isLogedIn)}}>Log-Out</button>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/blogs/:title' element={<Blog />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/add-blog' element={<ProtectPage isLogedIn={isLogedIn}><AddBlogs /></ProtectPage>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
