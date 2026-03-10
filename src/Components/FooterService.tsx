import React from 'react'

const FooterService = () => {
    return (

        <section className="bg-[#0B2E57] text-white py-5 pt-10">
            <div className="max-w-7xl mx-auto px-2 text-center">
                <h2 className="text-4xl font-semibold mb-10">
                    Towber By The Numbers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div>
                        <h3 className="text-6xl font-bold">10k+</h3>
                        <p className="mt-2 text-lg">Towing Trucks in Our Network</p>
                    </div>

                
                    <div>
                        <h3 className="text-6xl font-bold">50k+</h3>
                        <p className="mt-4 text-lg">Satisfied Clients and Counting</p>

                    
                        <button className="mt-10 bg-white text-[#0B2E57] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                            BOOK SERVICE
                        </button>
                    </div>

                    
                    <div>
                        <h3 className="text-6xl font-bold">60 sec</h3>
                        <p className="mt-4 text-lg">Average Dispatch Time</p>
                    </div>

                </div>
            </div>

        </section>



    )
}

export default FooterService
