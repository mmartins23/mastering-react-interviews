import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './store/loginReducer';
import productReducer from './store/productReducer';

const rootReducer = combineReducers({
  pr: productReducer, 
  lr: loginReducer
})

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);