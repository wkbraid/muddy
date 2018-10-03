import React, { Component } from 'react';
import { Classroom } from './Classroom.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div class="Main">
        <h1>Muddy Children Problem</h1>  
        <Classroom children="4" width="500"/>
        <h2>References</h2>
      </div>
    );
  }
}

export default Main;
