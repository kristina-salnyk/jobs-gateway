// types
import { PayloadAction } from '@reduxjs/toolkit'
import { MapStoreData } from './types'

export const mapStoreReducers = {
  setMapData: (
    state: MapStoreData,
    { payload }: PayloadAction<Partial<MapStoreData>>
  ) => ({
    ...state,
    ...payload,
  }),
}
