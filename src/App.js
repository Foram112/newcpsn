import './App.css';
import React from 'react';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './components/home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/components/home.css";
import "./components/queries.css";
import "./components/cities.css";

import Home from './components/services';
import Citiesavailable from './components/Cities';
import table from '../src/app/index';

function App() {
  return ( 
  <div>
  
     <BrowserRouter>
          <Routes>
           
              <Route exact path='/' element={<Home />}>
              </Route>
              <Route exact path='/cities' element={<Citiesavailable />}>
              </Route>
            
              <Route exact path='/table' element={<table/>}>
              </Route>

              <Route exact path='/carousel' element={<Home />}>
              </Route>

          </Routes>
     </BrowserRouter>
  </div>

  );
}

export default App;
