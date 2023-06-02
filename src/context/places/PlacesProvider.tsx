import { useEffect, useReducer } from "react"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { seachrApi } from "../../apis";

import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE );

    useEffect(() =>{
      getUserLocation()
        .then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
    }, [])


    const seachPlacesByTerm = async( query: string ): Promise<Feature[]> => {
        if( query.length === 0 ) return []; //Todo: clear state
        if(!state.userLocation)  throw new Error ('User location not found');

        dispatch({ type: 'setLoadingPlaces'})

        const resp = await seachrApi.get<PlacesResponse>(`/${ query }.json`, {
          params:{
            proximity: state.userLocation.join(',')
          }
        });

          dispatch({ type: 'setPlaces', payload: resp.data.features })     
        return resp.data.features;
    }



  return (
    <PlacesContext.Provider value={{
      ...state,

      //methods
      seachPlacesByTerm
    }}>
      { children }
    </PlacesContext.Provider>
  )
}
