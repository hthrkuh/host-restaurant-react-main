import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore( reducers , applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
