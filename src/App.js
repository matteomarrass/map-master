import './app.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import StartGuessing from './pages/StartGuessing';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='startguessing' element={<StartGuessing />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
