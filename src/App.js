import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
        <Header/>
        <Routes>
          <Route path='/' />
          <Route path='/products'/>
          <Route path='/contact'/>
          <Route path='/about'/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
