import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Sidebar from './components/Sidebar/Sidebar'
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
