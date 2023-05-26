import { createContext } from "react";


export interface PlacesContextProps {
    isloading: boolean;
    useLocation?: [number, number]
}






export const PlacesContex = createContext({} as PlacesContextProps);