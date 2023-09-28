import React, { Component } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
class Home extends Component {

  render() {
    return (
      <div className="App">
        <div className='content'>
          <img src="https://freepngimg.com/thumb/categories/1467.png"/>
        <h1 className="title about-block">  
        Student Dropout Analysis
        </h1>
        <div className='main'>
        <Button variant="contained" onClick={() => window.location.href = '/teacher'}>Teacher Login</Button>
        <Button variant="contained" onClick={() => window.location.href = '/admin'}>Admin Login</Button>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
