import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Routes from '../Routes';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes />
      </main>
    </Router>
  );
}

export default App;
