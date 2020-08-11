import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.scss';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';
import Alert from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { gitHubState } from './context/github/gitHubState';


function App() {
  return (
    <gitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="conteiner p-4">
          <Alert />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/info" component={InfoPage} />
              <Route path="/profile" component={ProfilePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </gitHubState>
  );
}

export default App;
