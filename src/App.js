import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import Navbar from './components/common/Navbar';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import NotFoundPage from './components/common/NotFoundPage';
import AddCoursePage from './components/addcourse/AddCoursePage';
import EditCoursePage from './components/editcourse/EditCoursePage';
import DeleteCoursePage from './components/deletecourse/DeleteCoursePage'
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        {/* <Route path='/' component={LoginPage} exact />
        <Route path='/home' component={HomePage} exact /> */}
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/add' component={AddCoursePage} />
        <Route path='/course/edit' component={EditCoursePage} />
        <Route path='/course/delete' component={DeleteCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
