import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './reducers';
import createApi from './services/Api';

createApi();
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
