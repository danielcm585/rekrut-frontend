import React from "react"
import ReactDOM from "react-dom"

import "./styles/index.css"

import theme from "./styles/theme"
import App from "./App"

import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)