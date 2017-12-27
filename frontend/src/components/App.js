import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { HomePage, WritePage } from 'Pages';


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/write' component={WritePage} />
      </div>
    </Router>
  );
};

export default App;
