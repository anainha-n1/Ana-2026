import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "./pages/Pricipal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/perfil/:nome" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App