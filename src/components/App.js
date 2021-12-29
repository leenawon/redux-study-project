import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router> 
  );
}

export default App;
