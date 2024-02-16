'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@md-styles/theme'
import { GlobalStyles } from '@md-styles/global'

export default function ClientThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
