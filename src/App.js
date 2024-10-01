import './App.css';
import { useState } from 'react';
import CounterExample from './components/CounterExample';
import ContactUs from './components/ContactUs';
import DisplayData from './components/DisplayData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     <CounterExample product="user"/>
     {/*<ContactUs/>*/}
     <DisplayData/>
    </div>
  );
}

export default App;
