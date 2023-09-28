import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./components/Home"
import './App.css';
import Teacher from './components/Teacher';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/teacher" component={Teacher}/>
        <Route exact path="/admin" component={Admin}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
