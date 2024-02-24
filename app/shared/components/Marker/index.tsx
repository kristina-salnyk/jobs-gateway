import React from 'react'
import Point from '@md-types/Point'
import OverlayView from '@md-components/OverlayView'
import { MarkerIcon, MarkerWrapper } from './styled'

interface MarkerProps {
  map: google.maps.Map
  point: Point
  selected?: boolean
  onClick: (id: string) => void
}

function Marker({ map, point, selected = false, onClick }: MarkerProps) {
  const handleClick = React.useCallback(() => {
    onClick(point.id)
  }, [onClick, point.id])

  return (
    <>
      {map && (
        <OverlayView
          map={map}
          position={{
            lat: point.location.latitude,
            lng: point.location.longitude,
          }}
          zIndex={selected ? 99 : 0}
        >
          <MarkerWrapper>
            <MarkerIcon selected={selected} onClick={handleClick}>
              {point.title}
            </MarkerIcon>
          </MarkerWrapper>
        </OverlayView>
      )}
    </>
  )
}

export default Marker
