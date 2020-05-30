import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <Route path='/home' component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
