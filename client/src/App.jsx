import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  const Layout = () => {
    <>
      <Navbar/>
      <div style={{display: 'flex'}}>
        <Leftbar/>
      </div>
    </>
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
