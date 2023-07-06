import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Error from './Component/Error'
import Checkout from './Component/Checkout';

function App() {

  const [basketCount, setBasketCount] = React.useState(0);

  return (
    <div>
      <Header 
        basketCount = {basketCount}
      />
      <Routes>
        <Route exact path='/' element={
          <Home basketCount = {basketCount} setBasketCount = {setBasketCount} />
          } 
        />
        <Route path='/checkout' element={<Checkout />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
