// libs
import storage from 'redux-persist/lib/storage'
import {
  ActionFromReducersMapObject,
  combineReducers,
  configureStore,
  Reducer,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
// reducer
import mapDataReducer from './reducers/map'
// constants
import { EBlackListKeys, EWhiteListKeys } from '@md-constants/redux'
// types
import { PersistConfig } from 'redux-persist/es/types'

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  blacklist: Object.values(EBlackListKeys),
  whitelist: Object.values(EWhiteListKeys),
}

const reducers = {
  [EBlackListKeys.MAP]: mapDataReducer,
}

type ReducersMapObject = typeof reducers

export type RootReducer = Reducer<
  StateFromReducersMapObject<ReducersMapObject>,
  ActionFromReducersMapObject<ReducersMapObject>
>

const combinedReducer: RootReducer = combineReducers(reducers)

const persistedReducer = persistReducer(
  persistConfig,
  combinedReducer as RootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// Infer the type of makeStore
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
