import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './store/loginSlice';
import productReducer from './store/productSlice';

// const rootReducer = combineReducers({
//   pr: productReducer, 
//   lr: loginReducer
// })

// const store = createStore(rootReducer);


const store = configureStore({
  reducer: {
    pr: productReducer, 
    lr: loginReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);