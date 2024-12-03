'use client'

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useMemo } from "react"

const markers = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 51.5074, lng: -0.1278 },
  { lat: 35.6895, lng: 139.6917 },
]

export function GeographicLocationMap ()
{
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  const center = useMemo(() => ({ lat: 20, lng: 0 }), [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap zoom={ 2 } center={ center } mapContainerClassName="w-full h-[520px] rounded-lg">
      { markers.map((marker, index) => (
        <MarkerF key={ index } position={ marker } />
      )) }
    </GoogleMap>
  )
}

