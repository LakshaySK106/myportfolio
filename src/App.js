import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import CursorCanvas from "./components/CursorCanvas/CursorCanvas";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader"; 

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <>
      {loading && <Loader />}
      <CursorCanvas />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
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
