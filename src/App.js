import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        {/* <Home/> */}
        <Routes>
      
          <Route exact path="search" element={<SearchPage/>}/>
          <Route  path="/airbnb-clone" element={<Home/>}/>  
            {/* <SearchPage /> */}
          {/* </Route> */}
         
            {/* <Home /> */}
          {/* </Route> */}
        </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
