import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore} from "redux";
import contactReducer from "./redux/reducers/contact-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

const store = createStore(contactReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
