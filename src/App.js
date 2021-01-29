import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import ShopPage from './components/shop/shop';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/hompage/homepage';
import { SignInAndOutPage } from './pages/sign-in-sign-out/sign-in-signout';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndOutPage} />
        </Switch>
      </div>
    );
  }
}
