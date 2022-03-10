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


function App() {
  return ( <div>
     
     <BrowserRouter>
          <Routes>
             
              <Route exact path='/' element={<Home />}>
              </Route>
              <Route exact path='/cities' element={<Citiesavailable />}>
              </Route>
            

          </Routes>
     </BrowserRouter>
  </div>

  );
}

export default App;
