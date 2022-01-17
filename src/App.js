import React from 'react';

import Navigation from './components/navigation/navigation.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home';
import ShopPage from './pages/shop-page/shop';
import SigninPage from './pages/sign-in-page/sign-in';

import './App.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninPage} /> 
      </Switch>
    </div>
  );
}

export default App;


// 1.) user folder inside of redux
// 2.) make the signIn with email and password work
// 3.) after signing in change the navigation 'sign in' to 'sign out';
