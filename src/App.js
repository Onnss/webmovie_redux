import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import ProfilePages from './Pages/ProfilePages';
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} ></Route>
        <Route path='/movie/:idd' element={<ProfilePages/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </Router>
  );
}


export default App;
