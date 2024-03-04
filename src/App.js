
import React from 'react';
import { Route, Routes} from "react-router-dom";

import Navbar from './navbar.js'; 

import './styles.css';
import PD from './Navbar/pd';
import MUN from './Navbar/mun';
import COLLOQ from './Navbar/colloquiuim';
import Home from './Navbar/home';
import AboutUs from './Navbar/aboutUs';
import Footer from './footer.js';



const App = () => {

  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/pd" element={<PD/>}></Route>
        <Route path="/mun" element={<MUN/>}></Route>
        <Route path="/colloq" element={<COLLOQ/>}></Route>
      </Routes>
      <Footer />
      </>
  );
};

export default App;
