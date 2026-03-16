
import { useState } from 'react'
import Sidebarcontext from './SideContext'
const Sidebarprovider = ({ children }: any) => {

    const [sidebaropen, setsidebaropen] = useState(false)



    return (
        <Sidebarcontext.Provider value={{ sidebaropen, setsidebaropen }} >
            {children}
        </Sidebarcontext.Provider>


    )
}

export default Sidebarprovider
