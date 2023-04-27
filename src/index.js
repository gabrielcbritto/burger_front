import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/Order/';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
    <GlobalStyles/>
  </>
);