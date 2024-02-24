'use client'

import React from 'react'
import Point from '@md-types/Point'
import Marker from '@md-components/Marker'
import { MAP_BOUNDARIES } from '@md-constants/index'

const DEFAULT_POINT: Point = {
  id: '1',
  location: { latitude: 49.80762, longitude: 19.05584 },
  title: 'Default Point',
  description: 'This is the default point',
  address: '1234 Default St.',
  phone: '123-456-7890',
  email: 'default@example.com',
  website: 'https://default.com',
  hours: '9-5 M-F',
  status: 'Open',
}

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
}

function Map({ style, onClick, onIdle }: MapProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()
  const [selectedPoint, setSelectedPoint] = React.useState('')

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          disableDefaultUI: true,
          restriction: {
            latLngBounds: MAP_BOUNDARIES,
            strictBounds: false,
          },
          center: { lat: 0, lng: 0 },
          zoom: 2,
        })
      )
    }
  }, [ref, map])

  const handlePointClick = React.useCallback((id: string) => {
    setSelectedPoint((prevState) => (prevState === id ? '' : id))
  }, [])

  return (
    <div ref={ref} style={style}>
      {map && (
        <Marker
          map={map}
          point={DEFAULT_POINT}
          selected={selectedPoint === DEFAULT_POINT.id}
          onClick={handlePointClick}
        />
      )}
    </div>
  )
}

export default Map
