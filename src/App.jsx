import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/global"


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>  
  )
}

export default App
