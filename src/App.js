import React from 'react';
import {Route,Switch} from 'react-router-dom'

//components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
//scss
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/hats' component={ShopPage}/>

      </Switch>
    </div>
  );
}

export default App;
