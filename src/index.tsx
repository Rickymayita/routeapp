import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteApp } from './RouteApp';


if(!navigator.geolocation){
  alert('Tu navegeador no tiene opción de geolocalizacion');
  throw new Error('Tu navegeador no tiene opción de geolocalizacion');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);
