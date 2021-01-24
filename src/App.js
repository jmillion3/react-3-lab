import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderHome from './components/HeaderHome'
import Profile from './components/Profile'


function App(){
    return(
      <div className="App">
        <div className="header">
            <HeaderHome/>
        </div>
        <div>
            <Profile/>
        </div>
        
        
      </div>
    )
  }

export default App;
