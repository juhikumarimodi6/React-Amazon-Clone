import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import Error from './Component/Error'
import Checkout from './Component/Checkout';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App() {
  const location = useLocation();
  const showHeader = (location.pathname !== '/login') && (location.pathname !== '/signup');
  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
