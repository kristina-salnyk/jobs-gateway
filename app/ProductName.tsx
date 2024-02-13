'use client'

// hooks
import { useAppDispatch, useAppSelector } from './store/hooks'
// store
import { setMapData } from './store/reducers/map'
import { jobsMarkersSelector } from './store/reducers/map/selectors'

export default function ProductName() {
  const name = useAppSelector(jobsMarkersSelector)
  const dispatch = useAppDispatch()

  return (
    <input
      value={name}
      onChange={(e) => dispatch(setMapData({ jobsMarkers: [''] }))}
    />
  )
}
