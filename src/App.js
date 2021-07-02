import React from 'react';
import RootComponent from './RootComponent'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <RootComponent />
      </div >
    </Router>
  );
}

export default App;
