import { createContext } from 'react';


export interface PlacesContextProps {
    isLoading: boolean;
    useLocation?: [number, number];
}



export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);