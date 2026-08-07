import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Principal from "./pages/Principal"

export default function App() {
  return(
    <Router>
     <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/*" element={<Principal/>} />
     </Routes>
    </Router>
  )
  
}