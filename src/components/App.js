import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { HomePage, WritePage, PostPage } from 'Pages';
import { Header } from 'Components';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/write' component={WritePage} />
            <Route path='/:postId' component={PostPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
