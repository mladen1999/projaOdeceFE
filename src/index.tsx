import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
//import * as serviceWoker from '/.serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import UserLoginPage from './components/UserLoginPage/UserLoginPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import { UserRegistrationPage } from './components/UserRegistrationPage/UserRegistrationPage';

const menuItems = [
  new MainMenuItem("Home", '/'),
  new MainMenuItem("Contact", '/contact/'),
  new MainMenuItem("Log in", '/user/login/'),
  new MainMenuItem("Register", "/user/register/"),
];

ReactDOM.render(
  <React.StrictMode>
    <MainMenu items={ menuItems }></MainMenu>
    <HashRouter>
      <Switch>
        <Route exact path='/' component= { HomePage } />
        <Route exact path='/contact' component= { ContactPage } />
        <Route exact path='/user/login' component= { UserLoginPage } />
        <Route exact path='/user/register' component= { UserRegistrationPage } />
        <Route exact path='/category/:cId' component= { CategoryPage } />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
