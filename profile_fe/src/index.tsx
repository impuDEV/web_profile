import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

document.getElementById('appLoader')!.style.display = 'none'

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>,
  document.getElementById('root')
);
