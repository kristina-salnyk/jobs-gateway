import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// providers
import ClientThemeProvider from '@md-shared/providers/ThemeProvider'
import StyledComponentsRegistry from '@md-shared/providers/StyledComponentsRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
