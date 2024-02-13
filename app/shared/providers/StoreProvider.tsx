'use client'

import { Provider } from 'react-redux'
import { persistor, store } from '@md-app/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  )
}
