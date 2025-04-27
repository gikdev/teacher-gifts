import { NuqsAdapter } from "nuqs/adapters/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app.tsx"
import "./styles.css"

const container = document.getElementById("root")

if (!container) throw new Error("ROOT CONTAINER NOT FOUND!")

createRoot(container).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>,
)
