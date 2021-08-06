import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: 1,
      title: 'See, Touch, Feel',
      category: 'Kids',
    },
    {
      id: 2,
      title: 'The Sum of Us',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);
store.getState();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
