import React from 'react';
import Home from './Component/Home';
import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import Error from './Component/Error'
import Checkout from './Component/Checkout';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Footer from './Component/Footer';
import Header1 from './Component/Header1';

function App() {
  const location = useLocation();
  const showHeader = (location.pathname !== '/login') && (location.pathname !== '/signup');
  const showFooter = showHeader;
  return (
    <div>
      {showHeader && <Header1 />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<Error />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
