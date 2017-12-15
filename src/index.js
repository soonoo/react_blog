import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
