
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EVchargepayload } from '../Context/Payload/EVcharge/EVchargepayload'
import toast, { Toaster } from 'react-hot-toast'


const Userdetail = () => {
    const navigate = useNavigate()
    const { userdetails, setuserdetails } = useContext(EVchargepayload)

    const evuserdata = [
        "FullName",
        "Email",
        "PhoneNum",
        "VehicleNum"
    ]
    const handleomchange = (e, field) => {
        setuserdetails({ ...userdetails, [field]: e })
    }

    console.log(userdetails)

    const handlenextpage = (e) => {

        e.preventDefault()
        console.log(userdetails)

        const id = toast.loading("Booking Ride...");
        setTimeout(() => {
            toast.dismiss(id); // removes toast silently
        }, 2000); // 2 seconds

        setTimeout(() => {
            navigate('/towberbooked')
        }, 2000)

    }

    return (
        <div className=' flex flex-col overflow-x-hidden h-[67vh] gap-5  px-6 md:pt-5' >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className=' px-8  flex flex-wrap gap-7' >
                <img src="/images/1.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/2.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/step3.svg" alt="" />
            </div>
            <div className='flex flex-col  ' >
                <form action="" onSubmit={(e) => handlenextpage(e)} >
                    <h3  className='text-center mb-4 font-semibold  '  >Enter Your Details</h3>
                    <div className='flex flex-col gap-2' >
                        {evuserdata.map((value) => (
                            <div className='flex flex-col  gap-5 '>
                                <label aria-required >
                                    {value}
                                </label>
                                <input
                                    required
                                    onChange={(e) => handleomchange(e.target.value, value)}
                                    type="text"
                                    name=""
                                    id=""
                                    className='border-2  p-2 bg-gray-200 rounded-2xl border-gray-300    ' />
                            </div>
                        ))}
                        <button className='bg-purple-900 p-2 text-white rounded-2xl'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Userdetail
