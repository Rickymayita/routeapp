/* eslint import/no-webpack-loader-syntax: off */


import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteApp } from './RouteApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibXJpY2t5dGVjaCIsImEiOiJjbGlibnhrZWIwOTZ5M2RuMjdsZG1id2doIn0.V_EpM_CUx9PRJ68bOgdzzw';



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
