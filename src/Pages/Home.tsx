import React from 'react'
import Headers from '../Components/Headers'
import Slidesautoplay from '../Components/Slidesautoplay'
import Slideautoplaycars from '../Components/Slideautoplaycars'
import { workdata } from '../workdata'
import FooterService from '../Components/FooterService'
import Aboutcard from '../Components/Aboutcard'
import { SlCalender } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import { MdPriceCheck } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";







const Home = () => {


    return (
        <>
            <div className="h-screen bg-[url('/images/back.png')]   bg-cover bg-center bg-no-repeat w-full "  >

                <Headers />
                {/**home */}        <section id='home' >
                    <div className='flex   h-150 '>
                        <div className='  gap-3 flex flex-col my-35  m-14 '>

                            <h1 className='text-4xl font-bold text-white'>Reliable Towing Services When You Need Them The Most</h1>
                            <h2 className='text-2xl font-bold text-white'>Fast, Affordable, and Always There to Get You Back on the Road</h2>
                            <h3 className='text-2xl mt-3  text-white'>Need Assistance?</h3>
                            <button className='bg-purple-900 mt-4  w-44 p-2.5 px-3 text-white text-sm rounded-2xl  '>BOOK A SERVICE</button>

                        </div>
                    </div>
                </section>

                {/**Service */} <section id='service'>
                    {/**sliding service */}  <div className='bg-purple-900 p-7  h-auto  '   >
                        <h2 className='font-bold  text-center  text-[25px]  text-white   '   > Our Service </h2>
                        <div className=' mt-9'><Slidesautoplay /></div>
                    </div>

                    <div className="w-full bg-gray-100 p-5 md:py-20 px-6">{/**roadsidetrouble */}
                        <div className="md:w-7xl mx-auto  flex flex-col lg:flex-row items-center gap-16">

                            <div className="flex-1   ">
                                <img
                                    src="/images/image14.png"
                                    alt=""

                                    className="    rounded-2xl border-4  object-cover"
                                />
                            </div>
                            <div className="flex-1 p-4 ">
                                <h2 className="  md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
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

                    <div className=' bg-purple-900 p-7  h-auto'  >{/**slding cars */}
                        <h2 className='font-bold  text-center  text-[25px]  text-white   '   > Vehicles We Serve </h2>
                        <div className=' mt-9  ' ><Slideautoplaycars /></div>
                    </div>

                    <div className='flex flex-col p-7 gap-8 pt-15 justify-center items-center bg-gray-100 '  >{/**how it work */}
                        <h3 className='text-7xl  font-semibold '  >How It <span className='text-purple-900' >Works</span></h3>
                        <p>Towingknox makes roadside assistance quick and effortless. Download the app today and enjoy peace of mind on every journey!</p>
                        {/**inner div */}
                        <div className='flex  w-full py-10  flex-col  items-center gap-5 ' >
                            {workdata.map((value) => (
                                <>
                                    <div className={` ${value.id === 2 || value.id === 4 ? "hidden" : "block"} md:w-7xl  px-45  mx-32 flex flex-col lg:flex-row items-center gap-20 `} >
                                        <div className='flex-1  border-2 hover:bg-purple-900 hover:text-white border-gray-200 shadow-xl rounded-2xl  h-40 sm:w-auto md:max-w-2xl p-5 px-11  '    >
                                            <h3 className='text-3xl p-2  font-semibold  font-black'   >{value.title}</h3>
                                            <p className='leading-relaxed text-[16px] font-medium ' >{value.desc}</p>
                                        </div>
                                        <div className='flex-1'  >
                                            <img className='h-140' src={value.img} alt="" />
                                        </div>
                                    </div>

                                    <div className={` ${value.id === 1 || value.id === 3 ? "hidden" : "block"}    md:w-7xl px-45   mx-32 flex flex-col lg:flex-row items-center gap-20 `}>
                                        <div className='flex-1'  >
                                            <img className='h-140' src={value.img} alt="" />
                                        </div>
                                        <div className='flex-1 border-2 hover:bg-purple-900 hover:text-white border-gray-200 shadow-xl rounded-2xl  h-40 max-w-2xl p-5 px-11  '    >
                                            <h3 className='text-3xl p-2 font-semibold font-black'   >{value.title}</h3>
                                            <p className='leading-relaxed text-[16px] font-medium ' >{value.desc}</p>
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>

                    </div>

                    <FooterService />
                </section>
                {/**service end here */}

                {/**about us */}
                <section className="bg-gray-50 py-20 px-6 ">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-blue-900 mb-6">
                            Why TowingKnox?
                        </h2>
                        <p className="text-gray-600 text-lg ">
                            Towingknox is here to provide seamless assistance, ensuring that no
                            matter where you are, you’ll get the support you need quickly and
                            efficiently.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                        <Aboutcard
                            img={<SlCalender size={30} />}

                            title="Effortless Booking Experience"
                            desc="With a user-friendly mobile app, requesting assistance has never been easier, quicker, and more efficient."
                        />

                        <Aboutcard
                            img={<CiTimer size={30} />}
                            title="Instant Response"
                            desc="Get immediate assistance with Towingknox’s rapid dispatch system, ensuring help arrives when you need it most."
                        />

                        <Aboutcard
                            img={<MdPriceCheck size={30} />}
                            title="Affordable & Transparent Pricing"
                            desc="Enjoy upfront, competitive pricing with no hidden fees — just reliable service at a fair cost."
                        />

                        <Aboutcard
                            img={<MdSupportAgent size={30} />}
                            title="24/7 Support"
                            desc="No matter the time of day or night, Towingknox is always ready to assist with emergency roadside services."
                        />
                    </div>

                </section>
                {/**aboutus end here */}

                {/**contact */}
                <section id='contact' className="bg-purple-900 text-white py-5 pt-15 flex justify-center items-center  ">

                    <div className='w-2xl   flex flex-col gap-5   justify-center items-center'  >
                        <img className='h-20 w-20' src="/images/logo.png" alt="na" />
                        <div className='flex gap-4 font-semibold  '  >
                            <a href="#">About</a>
                            <a href="#">Service</a>
                            <a href="#">Support</a>
                            <a href="#">Help</a>
                            <a href="#">Contact Us</a>

                        </div>
                        <p className='mb-6 font-bold'   >© 2026 Towber. All rights reserved.</p>

                    </div>
                </section>
                {/**end here */}

            </div>
        </>

    )
}

export default Home
