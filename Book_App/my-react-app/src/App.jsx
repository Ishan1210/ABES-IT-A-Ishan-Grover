import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './components/book';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import './components/navbar.css';
import './components/book.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <div id="ish">
            <Book />
            <Book />
            <Book />
          </div>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
