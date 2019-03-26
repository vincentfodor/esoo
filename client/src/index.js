import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App headline="ESOO" />, document.getElementById('root'));

serviceWorker.unregister();