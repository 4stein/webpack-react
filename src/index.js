import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import App from './App';

// root
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App/>);
// hot
if (module.hot) {
  module.hot.accept()
};