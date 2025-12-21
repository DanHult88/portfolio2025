import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"

const theme = createTheme({
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
