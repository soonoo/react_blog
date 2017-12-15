import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Route path='/' component={HomePage} />
    </Router>
  );
};

export default App;
