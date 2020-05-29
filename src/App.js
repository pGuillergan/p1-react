import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path='/' component={HomePage} exact /> */}
        <Route path='/' component={AboutPage} exact />
      </Switch>
    </div>
  );
}

export default App;
