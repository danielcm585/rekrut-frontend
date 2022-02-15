import React from "react"
import ReactDOM from "react-dom"

import "@fontsource/inter/400.css"

import App from "./App"
import theme from "./theme"

import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)