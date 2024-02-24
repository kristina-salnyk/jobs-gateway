import React from 'react'
import { createPortal } from 'react-dom'
import createOverlay from '@md-shared/creators/Overlay'

interface OverlayViewProps extends React.PropsWithChildren {
  map: google.maps.Map
  position: google.maps.LatLngLiteral
  zIndex: number
}

function OverlayView({ map, position, zIndex, children }: OverlayViewProps) {
  const container = React.useMemo(() => {
    const div = document.createElement('div')
    div.style.position = 'absolute'
    return div
  }, [])

  const overlay = React.useMemo(() => {
    return createOverlay(container, position)
  }, [container, position])

  React.useEffect(() => {
    overlay.setMap(map)
    return () => overlay.setMap(null)
  }, [map, overlay])

  React.useEffect(() => {
    container.style.zIndex = `${zIndex}`
  }, [zIndex, container])

  return createPortal(children, container)
}

export default OverlayView
