import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { SearchResults } from ".";


export const SearchBar = () => {

    const { seachPlacesByTerm } = useContext( PlacesContext );

    const debounceRef = useRef<NodeJS.Timeout>()
        
    const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        if( debounceRef.current )
        clearTimeout( debounceRef.current );

        debounceRef.current = setTimeout(() => {            
            seachPlacesByTerm( event.target.value);//todo: buscar o ejecutar consulta          
        }, 350);
    }

  return (
    <div className="seach-container">
        <input
            type="text"
            className="form-control"
            placeholder="Find place..."
            onChange={ onQueryChange }
        />

        <SearchResults />
    </div>
  )
}
