'use client'

import React from 'react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import Map from '@md-components/Map'
import { Main } from './styled'
import SearchBar from '@md-components/SearchBar'

export default function Page() {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }

  return (
    <Main>
      <SearchBar />
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        render={render}
      >
        <Map style={{ width: '100%', height: '500px' }} />
      </Wrapper>
    </Main>
  )
}
