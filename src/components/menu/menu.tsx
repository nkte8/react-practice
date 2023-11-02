import React from "react";
import './menu.css';

import { BrowserRouter, Link, Routes , Route } from "react-router-dom";

import { Home } from '../home/home';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';


export function Menu(): JSX.Element {
  return (
    <BrowserRouter>
      <ul className="menu">
        <Link to="/"><li>Home</li></Link>
        <Link to="/page1"><li>Page1</li></Link>
        <Link to="/page2"><li>Page2</li></Link>
      </ul>

      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/page1" Component={Page1} />
      <Route path="/page2" Component={Page2} />
      </Routes>
    </BrowserRouter>
  );
};

