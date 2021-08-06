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
      title: 'Game of thrones',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'Art of war',
      category: 'Learning',
    },
    {
      id: 3,
      title: 'A Clash of Kings',
      category: 'Sci-Fi',
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
