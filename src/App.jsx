import './App.css'

import logo from "./images/logo.svg"


import Game from "./pages/game.jsx"


import { Routes, Route, NavLink } from "react-router-dom"

function App() {


  return (
    <div className='main'>

      <div className='main_back'>
          <img src={logo} />
          <NavLink to="/game"><button> 시작하기 </button></NavLink>
      </div>




      <Routes>
        <Route path="/game" element={<Game />}></Route>
      </Routes>

    </div> 

  )


}

export default App
