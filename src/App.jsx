import React from 'react';
import './App.css';
import {Routes,Route, HashRouter} from "react-router-dom";
import Projects from "./projects.jsx";
import Connect from "./connect.jsx";
import Start from "./start.jsx";

export default function App(){
  return (
    <>
     <>
     <HashRouter>
      <div id = "content">
        <Routes>
          <Route path = "/" element = {<Start/>}/>
          <Route path = "/Start" element = {<Start/>}/>
          <Route path = "/Connect" element = {<Connect/>}/>
          <Route path = "/Projects" element = {<Projects/>}/>
        </Routes>
      </div>
     </HashRouter>
    </>
    </>
  );
};
