import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signin from './Pages/Auth/Signin'
import Signup from './Pages/Auth/Signup'
import Forget from './Pages/Auth/Forget'
import Service from './Pages/Service/Dashboard/Service'
import Sidebarprovider from './Context/Sidebar/Sidebarprovider'
import DefaultLayout from './Layout/DefaultLayout'
import EVpage1 from './Pages/Service/Evcharge.tsx/EVpage1'
import EVpage1provider from './Context/Sidebar/Evcharge/Page1/EVpage1provider'
import EVpage2 from './Pages/Service/Evcharge.tsx/EVpage2'
import EVpage2provider from './Context/Sidebar/Evcharge/Page2/EVpage2provider'

function App() {


  return (
    <><Sidebarprovider>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/forget' element={<Forget />} />
      </Routes>

      <EVpage1provider>
        <EVpage2provider>
        <DefaultLayout  >
          <Routes>
            <Route path='/service' element={<Service />} />
            <Route path='/evpage1' element={<EVpage1 />} />
            <Route path='/evpage2' element={<EVpage2/>}  />
           </Routes>
        </DefaultLayout>
        </EVpage2provider>
      </EVpage1provider>

    </Sidebarprovider>

    </>

  )
}

export default App
