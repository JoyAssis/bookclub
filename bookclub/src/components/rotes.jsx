import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './login'
import Cadastro from './cadastro'
import Home from './home'

export default function Navigation(){
  return(
   <>
   <Router>
    <h1><Link to="/Home">CLUBE DO LIVRO</Link></h1>
    <ul>
      <li><Link to="/Login" >Entrar</Link></li>
      <li><Link to="/Cadastro" >Cadastro</Link></li>
    </ul>
    <Routes>
    <Route element={<Home/>} path="/Home" />
      <Route element={<Login/>} path="/Login" />
      <Route element={<Cadastro/>} path="/Cadastro" />
    </Routes>
   </Router>
   
   </>
  )
}