import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home';
import ShopPage from './pages/shop-page/shop';

import './App.css';
import Navigation from './components/navigation/navigation.component';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
