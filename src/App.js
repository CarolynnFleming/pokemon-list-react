import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import PokePage from './PokePage';
import PokeDetail from './PokeDetail';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <PokePage />
          </Route>
          <Route exact path="/detail/:id">
            <PokeDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


