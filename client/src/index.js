import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/indexReducer';
import { applyMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllUsers } from './redux/actions/users.action'
import { getAllBooks } from './redux/actions/books.action';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({reducer:reducers}, composedEnhancer)

store.dispatch(getAllUsers())
store.dispatch(getAllBooks())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


