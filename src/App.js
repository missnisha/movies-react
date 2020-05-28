import React from 'react';
import './styles.css';
import Home from './pages/Home';
import CurrentMoviesList from './components/CurrentMoviesList'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SlideList from './components/SlideList';
import Detail from './pages/Detail';

function App() {
  return (
  
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/Current" exact={true}>
            <CurrentMoviesList />
          </Route>
          <Route path="/Slide" exact={true}>
            <SlideList />
          </Route>
          <Route path="/Detail/:id" >
            <Detail />
          </Route>
        </Switch>
      </Router>
  
  );
}

export default App;
