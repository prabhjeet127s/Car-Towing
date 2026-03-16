
import { useNavigate } from 'react-router-dom'

const Userdetail = () => {
    const navigate = useNavigate()

    const evuserdata = [

        "Full Name ",
        "Email",
        "Phone Number",
        "Vehicle Number"
    ]

    return (
        <div className=' flex flex-col overflow-x-hidden h-[67vh] gap-5  px-6 md:pt-5' >
            <div className=' px-8  flex flex-wrap gap-7' >
                <img src="/images/1.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/2.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/step3.svg" alt="" />
            </div>
            <div className='flex flex-col  ' >
                <form action="">
                    <h3 className='text-center mb-4 font-semibold  '  >Enter Your Details</h3>
                    <div className='flex flex-col gap-2' >
                        {evuserdata.map((value) => (
                            <div className='flex flex-col  gap-5 '>

                                <label
                                    htmlFor=""
                                    className=''
                                >{value}</label>

                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className='border-2  p-2 bg-gray-200 rounded-2xl border-gray-300    ' />
                            </div>
                        ))}
                        <button onClick={() => navigate('/towberbooked')} className='bg-purple-900 p-2 text-white rounded-2xl'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Userdetail
