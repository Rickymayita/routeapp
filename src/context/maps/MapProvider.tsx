import { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './MapReducer';


export interface MapState{
    isMapReady: boolean;
    map?: Map;
}

const INITIAL_STATE: MapState ={
    isMapReady: false,
    map: undefined,
}

interface Props{
    children: JSX.Element | JSX.Element[];
}


export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
            <h4>Are you here</h4>
            <p>Somewhere in the world</p>
            `)

        new Marker({
            color: '#0d6efd',
        })
            .setLngLat( map.getCenter() )
            .setPopup( myLocationPopup )
            .addTo(  map );




        dispatch({ type: 'setMap', payload: map })

    }


  return (
    <MapContext.Provider value={{
        ...state,

        // Method
        setMap,
    }}>
        { children }
    </MapContext.Provider>
  )
}
