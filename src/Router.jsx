import './App.css'


import Game from "./pages/game.jsx"
import App from "./pages/App.jsx"


import { Routes, Route} from "react-router-dom"

function Router() {


  return (
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>

  )


}

export default Router
