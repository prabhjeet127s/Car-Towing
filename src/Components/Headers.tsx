import React from 'react'
import { IoIosCall } from "react-icons/io";



const Headers = () => {
    return (
        <div className='   flex justify-between '   >
            <div className='flex justify-center items-center p-2 px-4  '    >
                <img src="/images/logo.png" alt="na"
                    className='h-25 w-25'
                />
            </div>
            <nav className='flex shadow-2xl gap-5 justify-center items-center'    >
                <a className='text-white hover:text-black text-xl font-semibold' href="#">SERVICES</a>
                <a className='text-white hover:text-black text-xl font-semibold  ' href="">ABOUT US</a>
                <a className='text-white hover:text-black text-xl font-semibold ' href=""> CONTACT US </a>
            </nav>

            <button className='p-2 rounded-xl  bg-purple-900 h-14 font-semibold px-4 mt-6 mr-6  text-white  flex justify-center items-center' >
                <span><IoIosCall className='text-white size-6  pr-2' /></span>
                Toll Free
            </button>

        </div>
    )
}

export default Headers
