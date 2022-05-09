import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})
const store = configureStore({reducer})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
