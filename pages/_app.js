import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import '../styles/loading.css'

const theme = extendTheme({
    colors: {
        dark: {
            "cardhover": "rgba(254, 215, 226, 0.08)",
            "text": "#96A7AF",
            "pink": "#ED64A6",
            "buttonfocus": "#f293c1",
            "buttonbackground": "#4b4f5f",
            "buttonhoverbackground": "#575c6f",
            "navbarbuttonhover": "#f07eb5"
        }
    }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp