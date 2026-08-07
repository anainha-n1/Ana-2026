import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Principal from "./src/pages/Principal"

export default function App(){
  return(
    <Router>
      <Routes>
        {/* todas as rotas internas ficam dentro do layout principal */}
        <Route path="/*" element={<Principal />}/>
        
      </Routes>
    </Router>
    
  )
}