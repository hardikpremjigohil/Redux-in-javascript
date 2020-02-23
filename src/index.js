import React from 'react';

import rootReducer from './store/reducers/index';
import App from './App';
import './index.css';

import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware ,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const logger =store =>{
  return next => {
    return action =>{
        console.log('[Middleware] Dispatching' ,action)
        const result =next(action);
        console.log('[Middleware] Dispatching' ,store.getState());
        return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer ,composeEnhancers(applyMiddleware(logger,thunk)));

// only middleware
//const store = createStore(reducer ,applyMiddleware(logger));
//only Redux Dev Tools
//const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
