import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { combinedReducer, logger } from './reducers';

const store = createStore(combinedReducer, applyMiddleware(thunkMiddleware, logger));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
