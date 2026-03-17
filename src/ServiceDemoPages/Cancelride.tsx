import { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { EVchargepayload } from '../Context/Payload/EVcharge/EVchargepayload'

const Cancelride = () => {

    const { setcancelridereason, cancelridereason } = useContext(EVchargepayload)
    const [textareaopen, settextareaopen] = useState('')
    const navigate = useNavigate()
    const handleonchange = (value) => {
        settextareaopen(value)
        setcancelridereason(value)
        console.log(cancelridereason)

    }
    const handlecancel = () => {
        toast.success('Booking Cancelled Sucessfully ')
        setTimeout(() => {
            navigate('/service')
        }, 1000);
    }
    const cancelridedata = [
        {
            id: "A.",
            label: " The issue was resolved, and I no longer need the service."
        },
        {
            id: "B.",
            label: "The estimated arrival time is too long."
        },
        {
            id: "C.",
            label: "I made a mistake in the location or service."
        },
        {
            id: "D.",
            label: ".I found another service provider."
        },
        {
            id: "E.",
            label: " I’m not satisfied with the service pricing."
        },
        {
            id: "F.",
            label: "Other"
        },
    ]
    return (
        <div className=' flex flex-col items-center p-5 py-10 gap-5 h-[88.5vh] '   >
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <div className='flex flex-col justify-center gap-1.5'>
                <h2 className='text-2xl font-semibold text-center'  >Cancel Request?</h2>
                <h3 className='text-xl'  >Why do you want to cancel the booking?</h3>
            </div>
            <div className=' w-full  flex flex-col gap-5' >
                <h2>Choose one option.</h2>
                {cancelridedata.map((value) => (
                    <div className='flex flex-col gap-3  ' >
                        <div className='flex gap-2  ' >
                            <input required name='option' value={value.label} onChange={(e) => handleonchange(e.target.value)} type="radio" />
                            <label htmlFor="">
                                <span>{value.id}</span>
                                {value.label}
                            </label>
                        </div>
                        {value.id == "F." && textareaopen == 'Other' ? (<div>
                            <textarea
                                onChange={(e) => handleonchange(e.target.value)}
                                placeholder='Please Specify Your Reason '
                                className=' focus-within:border-black p-5  w-full h-28 rounded-2xl border-2 border-gray-200'
                                name="" id=""></textarea>
                        </div>) : ""}
                    </div>
                ))}
            </div>
            <button
                onClick={handlecancel}
                className='w-full  cursor-pointer  rounded-2xl p-2 text-white bg-purple-900'>
                Continue
            </button>
        </div>
    )
}
export default Cancelride
