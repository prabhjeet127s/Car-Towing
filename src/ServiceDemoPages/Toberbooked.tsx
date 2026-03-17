

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EVchargepayload } from '../Context/Payload/EVcharge/EVchargepayload'

const Towberbooked = () => {

    const { vehicleinformation, servicefor, vehiclelocation, userdetails, cancelridereason }
        = useContext(EVchargepayload)

    const payload = {
        vehicletype: vehicleinformation.vehicletype,
        chargingsupported: vehicleinformation.chargingsupported,
        chargertype: vehicleinformation.chargertype,
        chargermethod: vehicleinformation.chargermethod,
        servicefor: servicefor,
        vehiclelocation: vehiclelocation,
        FullName: userdetails.FullName,
        Email: userdetails.Email,
        PhoneNum: userdetails.PhoneNum,
        VehicleNum: userdetails.VehicleNum,
        cancelridereason: cancelridereason
    }



    const navigate = useNavigate()



    return (

        <div className="flex  flex-col items-center overflow-auto h-[88.5vh] text-center space-y-4 px-6 justify-between pb-2 sm:pb-6">
            <div className='w-full   ' >

                <div className="mt-13 mx-25 h-full   flex flex-col items-center  space-y-4">
                    <img className='size-24' src="/images/ride-booked.svg" alt="" />
                    <div className='flex flex-col gap-10  '   >
                        <h3 className='text-2xl font-semibold'  >Your ride is booked!</h3>
                        <img className='size-25 ml-17 ' src="/images/tow.gif" alt="" />
                        <h2 className='text-sm'  >Driver is arriving in 60 minutes...</h2>
                    </div>
                </div>

                <div className='flex flex-col w-full   gap-3  ' >
                    <button
                        onClick={() => navigate('/service')}
                        className='bg-purple-900 text-white      p-2.5 rounded-2xl'  >Book New Service</button>
                    <button
                        onClick={() => navigate('/cancelride')}
                        className='text-red-600  font-semibold '    > Cancel Booking</button>
                </div>
            </div>
        </div>
    )
}

export default Towberbooked
