import Home from "./pages/Home"
import Favs from "./pages/Favs"
import NavBar from "./components/NavBar"
import {Routes,Route} from "react-router-dom"


function App() {


  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
