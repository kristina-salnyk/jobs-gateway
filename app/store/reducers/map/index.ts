// libs
import { createSlice } from '@reduxjs/toolkit'
// constants
import { EBlackListKeys } from '@md-constants/redux'
// redux
import { mapStoreReducers } from './reducers'
// types
import { MapStoreData } from './types'

const initialState: MapStoreData = {
  jobsMarkers: [],
}

const mapSlice = createSlice({
  name: EBlackListKeys.MAP,
  initialState,
  reducers: mapStoreReducers,
})

export const { setMapData } = mapSlice.actions

export default mapSlice.reducer
