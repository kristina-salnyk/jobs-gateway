'use client'

import React from 'react'
import { MAP_BOUNDARIES } from '@md-constants/index'

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
}

function Map({ style, onClick, onIdle }: MapProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()

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

  return <div ref={ref} style={style}></div>
}

export default Map
