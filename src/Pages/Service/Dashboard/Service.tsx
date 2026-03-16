import { Pagesswitchcontext } from "../../../Context/PagesSwitich/PageswitchContext"
import { useContext } from 'react'
import Services from "./Services"
import EVpage1 from "../Evcharge.tsx/EVpage1"
import EVpage2 from "../Evcharge.tsx/EVpage2"
import EVpage3 from "../Evcharge.tsx/EVpage3"
import EVpage4 from "../Evcharge.tsx/EVpage4"



const Service = () => {

    const { page } = useContext(Pagesswitchcontext)

    return (
        <>
            <div>
                {page == 0 && <Services />}
                {page == 1 && <EVpage1 />}
                {page == 2 && <EVpage2 />}
                {page == 3 && <EVpage3 />}
                {page == 4 && <EVpage4 />}
            </div>



        </>




    )
}

export default Service
