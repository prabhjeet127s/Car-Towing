
import { Pagesswitchcontext } from "../../../Context/PagesSwitich/PageswitchContext"
import { useContext } from 'react'
import Services from "./Services"
import EVpage1 from "../Evcharge.tsx/EVpage1"



const Service = () => {

    const { page } = useContext(Pagesswitchcontext)

    return (


        <>
            <div>
                 {page == 1 &&  <Services />}
                 {page==2 && <EVpage1/> }
            </div>



        </>




    )
}

export default Service
