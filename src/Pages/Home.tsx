import React from 'react'
import Headers from '../Components/Headers'
import Slidesautoplay from '../Components/Slidesautoplay'

import Slideautoplaycars from '../Components/Slideautoplaycars'

const Home = () => {
    return (
        <>
            <div className="h-screen bg-[url('/images/back.png')]   bg-cover bg-center bg-no-repeat  "  >

                <Headers />
                {/**home */}        <section id='home' >
                    <div className='flex   h-150 '>
                        <div className='  gap-3 flex flex-col my-35 m-14 '>

                            <h1 className='text-4xl font-bold text-white'>Reliable Towing Services When You Need Them The Most</h1>
                            <h2 className='text-2xl font-bold text-white'>Fast, Affordable, and Always There to Get You Back on the Road</h2>
                            <h3 className='text-2xl mt-3  text-white'>Need Assistance?</h3>
                            <button className='bg-purple-900 mt-4  w-44 p-2.5 px-3 text-white text-sm rounded-2xl  '>BOOK A SERVICE</button>

                        </div>
                    </div>
                </section>

                {/**Service */}    <section id='service'   >
                    {/**sliding service */}       <div className='bg-purple-950 p-7  h-auto  '   >
                        <h2 className='font-bold  text-center  text-[25px]  text-white   '   >    Our Service </h2>
                        <div className=' mt-9  ' ><Slidesautoplay /></div>
                    </div>

                    <div className="w-full bg-gray-100 py-20 px-6">{/**roadsidetrouble */}
                        <div className="w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                            <div className="flex-1">
                                <img
                                    src="/images/image14.png"
                                    alt=""
                                    className="w-full max-w-xl rounded-2xl border-4  object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                                    We Turn Roadside Troubles into Hassle-Free Solutions
                                </h2>

                                <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                    We understand how stressful it can be when your vehicle breaks down
                                    or you’re stuck on the side of the road. At Towingknox, we are dedicated
                                    to making your roadside emergencies as stress-free as possible.
                                    Our team of skilled professionals delivers top-notch towing and
                                    roadside assistance tailored to your specific needs.
                                </p>

                                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                                    Whether it’s a breakdown, a flat tire, or running out of fuel,
                                    our expert team is ready to provide fast, reliable, and professional
                                    assistance whenever you need it.
                                </p>

                                <button className="mt-8 bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition">
                                    BOOK A SERVICE
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className=' bg-purple-950 p-7  h-auto'  >{/**slding cars */}
                        <h2 className='font-bold  text-center  text-[25px]  text-white   '   > Vehicles We Serve </h2>
                        <div className=' mt-9  ' ><Slideautoplaycars /></div>
                    </div>

                    <div className='flex flex-col p-7 gap-8 pt-15 justify-center items-center '  >{/**how it work */}
                        <h3 className='text-7xl  font-semibold '  >How It <span className='text-purple-950' >Works</span></h3>
                        <p>Towingknox makes roadside assistance quick and effortless. Download the app today and enjoy peace of mind on every journey!</p>
                        <div className='flex ' >
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>


                    </div>








                </section>


            </div>



        </>

    )
}

export default Home
