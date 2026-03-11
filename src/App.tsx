import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signin from './Pages/Auth/Signin'
import Signup from './Pages/Auth/Signup'
import Forget from './Pages/Auth/Forget'
import Service from './Pages/Service/Service'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/forget' element={<Forget />} />
        <Route path='/service' element={<Service />} />
      </Routes>

    </>

  )
}

export default App
