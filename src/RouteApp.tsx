import { MapProvider, PlacesProvider } from './context'
import { HomePage } from './page'

import './global.css'

export const RouteApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  )
}
