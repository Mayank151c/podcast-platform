import './App.css';
import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/podcast" element={<Signup />} />
        <Route path="/start" element={<Signup />} />
        <Route path="/profile" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
