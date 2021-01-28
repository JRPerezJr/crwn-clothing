import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import ShopPage from './components/shop/shop';
import HomePage from './pages/hompage/homepage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
