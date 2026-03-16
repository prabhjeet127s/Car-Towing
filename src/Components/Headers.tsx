
import { IoIosCall } from "react-icons/io";



const Headers = () => {
    return (
        <div className='  p-2 flex relative  '   >

            <div className='flex justify-center items-center p-2 px-4  '    >
                <img src="/images/logo.png" alt="na"
                    className='h-25 w-25'
                />
            </div>
            <nav className='flex lg:absolute left-[40%] top-12 shadow-2xl gap-5 justify-center items-center'    >
                <a className='text-white hover:text-black md:text-xl ' href="#service">SERVICES</a>
                <a className='text-white hover:text-black md:text-xl  ' href="#about">ABOUT US</a>
                <a className='text-white hover:text-black md:text-xl ' href="#contact"> CONTACT US </a>
            </nav>

            <button className='md:p-5 rounded-xl  bg-purple-900 md:h-14 font-semibold md:px-4 md:mt-6 m-auto md:mr-6  text-white  flex flex-col md:flex-row justify-center items-center' >
                <span><IoIosCall className='text-white md:size-6 p-1 m-1 md:pr-2' /></span>
                Toll Free
            </button>

        </div>
    )
}

export default Headers
