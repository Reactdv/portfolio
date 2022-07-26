import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import logger from "redux-logger"
import { applyMiddleware,createStore,compose} from "redux"
import thunk from "redux-thunk"
import { combineReducers } from "./utils"
const store = createStore(
  combineReducers,
  compose(applyMiddleware(thunk,logger))
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
