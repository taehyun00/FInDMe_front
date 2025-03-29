import '../App.css'

import logo from "../images/logo.svg"

import { NavLink } from "react-router-dom"

function App() {


  return (
    <div className='main'>

      <div className='main_back'>
          <img src={logo} />
          <NavLink to="/game"><button> 시작하기 </button></NavLink>
      </div>
    </div> 

  )


}

export default App
