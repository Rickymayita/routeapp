import { useEffect, useReducer } from "react"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { seachrApi } from "../../apis";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
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


    const seachPlacesByTerm = async( query: string ) => {
        if( query.length === 0 ) return []; //Todo: clear state
        if(!state.userLocation)  throw new Error ('User location not found');


        const resp = await seachrApi.get(`/${ query }.json`, {
          params:{
            proximity: state.userLocation.join(',')
          }
        });

        console.log(resp.data);
        
        return resp.data
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
