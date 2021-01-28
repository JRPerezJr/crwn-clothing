import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import ShopPage from './components/shop/shop';
import HomePage from './pages/hompage/homepage';
import { SignInAndOutPage } from './pages/sign-in-sign-out/sign-in-signout';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndOutPage} />
      </Switch>
    </div>
  );
}

export default App;
