import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteApp } from './RouteApp';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);
