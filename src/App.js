import React from 'react';
import { Router, Link } from "@reach/router"
import './App.css';
import { Welcome } from './containers/Welcome'
import { Flow } from './containers/Flow'
import { Signup } from './containers/Signup';
import { Animation } from './containers/Animation';
import { Sorry } from './containers/Sorry';
import { Eligible } from './containers/Eligible';

function App() {
  return (
    <Router>
      <Welcome path="/" />
      <Flow path="flow" />
      <Signup path="signup" />
      <Animation path="animation" />
      <Sorry path="sorry" />
      <Eligible path="eligible" />
    </Router>
  );
}

export default App;





