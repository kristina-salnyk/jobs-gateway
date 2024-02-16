'use client'

import React from 'react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import Map from '@md-components/map'
import { Main } from './styled'

export default function Page() {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }

  return (
    <Main>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        render={render}
      >
        <Map style={{ width: '100vw', height: '100vh' }} />
      </Wrapper>
    </Main>
  )
}
