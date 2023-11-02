import React from "react";
import './menu.css';

import { BrowserRouter, Link, Routes , Route } from "react-router-dom";

import { Home } from '../home/home';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page404 } from '../page404/page404';

export function Menu(): JSX.Element {
  return (
    <BrowserRouter basename="/react-practice">
      <ul className="menu">
        <Link to="/"><li>Home</li></Link>
        <Link to="/page1"><li>Page1</li></Link>
        <Link to="/page2"><li>Page2</li></Link>
        <Link to="/hogehogehoge"><li>Not found page</li></Link>
      </ul>

      <div className="contents">
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/page1" Component={Page1} />
        <Route path="/page2" Component={Page2} />
        <Route path="*" Component={Page404}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

