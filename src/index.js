import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import App from "./App";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import Counter from "./componets/counter";

ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();