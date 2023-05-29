import { createContext } from "react";


export interface PlacesContextProps {
    isloading: boolean;
    useLocation?: [number, number]
}






export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);