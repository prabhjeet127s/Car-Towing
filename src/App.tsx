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
import EVpage3 from './Pages/Service/Evcharge.tsx/EVpage3'
import EVpage3provider from './Context/Sidebar/Evcharge/Page3/EVpage3context'
import EVpage4 from './Pages/Service/Evcharge.tsx/EVpage4'
import EVpage4provider from './Context/Sidebar/Evcharge/Page4/EVpage4provider'
import EVuserdetail from './Pages/Service/Evcharge.tsx/EVuserdetail'
import EVtowerbooked from './Pages/Service/Evcharge.tsx/EVtowerbooked'
import EVcancelride from './Pages/Service/Evcharge.tsx/EVcancelride'
import Services from './Pages/Service/Dashboard/Services'
import PagesswitchProvider from './Context/PagesSwitich/PageswitchContext'


function App() {


  return (
    <><Sidebarprovider>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/forget' element={<Forget />} />
      </Routes>
      <PagesswitchProvider>
        <EVpage1provider>
          <EVpage2provider>
            <EVpage3provider>
              <EVpage4provider>
                <DefaultLayout  >
                  <Routes>
                    <Route path='/service' element={<Service />} />
                    <Route path='/evpage1' element={<EVpage1 />} />
                    <Route path='/evpage2' element={<EVpage2 />} />
                    <Route path='/evpage3' element={<EVpage3 />} />
                    <Route path='/evpage4' element={<EVpage4 />} />
                    <Route path='/userdetail' element={<EVuserdetail />} />
                    <Route path='/towberbooked' element={<EVtowerbooked />} />
                    <Route path='/cancelride' element={<EVcancelride />} />
                  </Routes>
                </DefaultLayout>
              </EVpage4provider>
            </EVpage3provider>
          </EVpage2provider>
        </EVpage1provider>
      </PagesswitchProvider>

    </Sidebarprovider>

    </>

  )
}

export default App
