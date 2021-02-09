import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/hompage/homepage';
import SignInAndUpPage from './pages/sign-in-sign-out/sign-in-and-sign-up';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
