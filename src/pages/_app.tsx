import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>

      { isDevelopment ? <ReactQueryDevtools /> : <></> }
    </QueryClientProvider>
  )
}

export default MyApp
