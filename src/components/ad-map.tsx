'use client'

import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px'
}

const center = {
  lat: 40.7128,
  lng: -74.0060
}

const radiusInMiles = 10
const radiusInMeters = radiusInMiles * 1609.34  // Convert 50 miles to meters

export default function AdMap ({ campaign }: { campaign: string })
{
  return (
    <LoadScript googleMapsApiKey='AIzaSyAcJ0odd9nueeDtRCafAWDBrQdnnSYAIZk'>
      <GoogleMap
        mapContainerStyle={ containerStyle }
        center={ center }
        zoom={ 9 }
      >
        <Marker position={ center } />

        {/* Circle with a 50-mile radius */ }
        <Circle
          center={ center }
          radius={ radiusInMeters }
          options={ {
            strokeColor: '#F05024',
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: '#F05024',
            fillOpacity: 0.25,
          } }
        />
      </GoogleMap>
    </LoadScript>
  )
}
