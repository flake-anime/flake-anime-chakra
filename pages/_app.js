import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} overflow="hidden" />
    </ChakraProvider>
  )
}

export default MyApp