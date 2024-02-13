// libs
import { createSelector } from '@reduxjs/toolkit'
// types
import { RootState } from '../../index'
// constants
import { EBlackListKeys } from '@md-constants/redux'

const jobsMarkers = (state: RootState) => state[EBlackListKeys.MAP].jobsMarkers

export const jobsMarkersSelector = createSelector(
  jobsMarkers,
  (jobsMarkers) => jobsMarkers
)
