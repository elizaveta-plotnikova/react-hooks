import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.scss';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="conteiner p-4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/info" component={InfoPage} />
            <Route path="/profile:name" component={ProfilePage} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
