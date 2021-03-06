import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TicketsSearch from './containers/TicketsSearch/TicketsSearch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import './index.css';

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <TicketsSearch />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
