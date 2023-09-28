import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='content'>
          <img src="https://freepngimg.com/thumb/categories/1467.png"/>
        <h1 className="title about-block">  
        Student Dropout Analysis
        </h1>
        <div className='main'>
        <Button variant="contained">Teacher Login</Button>
        <Button variant="contained">Admin Login</Button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
