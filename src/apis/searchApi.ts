import axios from "axios";



const seachrApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoibXJpY2t5dGVjaCIsImEiOiJjbGlibnhrZWIwOTZ5M2RuMjdsZG1id2doIn0.V_EpM_CUx9PRJ68bOgdzzw'
    }
})

export default seachrApi;