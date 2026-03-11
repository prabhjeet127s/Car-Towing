import React from "react";
import { Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Forget = () => {
    const navigate=useNavigate()
    return (
        <div className="w-full h-screen bg-[url('/images/background-image.png')] bg-cover bg-center flex justify-center items-center">
            <div className="bg-white max-w-xl  w-full   h-screen rounded-2xl shadow-xl px-8 pt-10 flex flex-col items-center">

                <button  onClick={()=>navigate('/auth/signin')} className=" w-full mb-10 "  >
                    <ArrowLeft className="" />
                </button>


                <img className="w-28 mb-8" src="/images/logo.png" alt="logo" />
                <h2 className="text-2xl font-bold mb-15">Forget Password</h2>

                <p className="text-gray-500  text-sm text-center leading-relaxed mb-12 w-full">
                    Enter your registered phone number below. We’ll send you a
                    verification code to reset your password
                </p>

                <form className="w-full flex flex-col">
                    <div className="flex flex-col  gap-2 mb-15">
                        <label className="text-gray-600 text-sm">Phone Number</label>
                        <div className="flex items-center  border-l-purple-600 border-l-4   bg-gray-100 border-gray-300 rounded-xl px-4 py-2 focus-within:border-purple-900">
                            <Phone className="text-purple-900 mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Enter mobile number"
                                className="w-full outline-none text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <button className="bg-purple-600  mt-7  text-white py-2.5 rounded-full text-sm font-medium hover:bg-purple-800 transition">
                        Continue
                    </button>
                
                </form>
            </div>
        </div>
    );
};

export default Forget;