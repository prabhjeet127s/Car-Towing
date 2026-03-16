
import { Phone, Lock, Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";



const Signin = () => {
  const navigate = useNavigate()

  const handlecontinue = () => {
    

    toast.success('Successfully log in')
    setTimeout(()=>{
    navigate('/service')

      
    },1000 )

  }

  return (
    <div className="w-full h-screen bg-[url('/images/background-image.png')] bg-cover bg-center flex justify-center items-center">
      <div ><Toaster
        position="top-center"
        reverseOrder={true}
      /></div>

      {/* White Card */}
      <div className="bg-white w-145 h-screen flex flex-col items-center pt-12 px-16">

        {/* Logo */}
        <img className="w-28 mb-8" src="/images/logo.png" alt="logo" />

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-10">Log In</h2>

        {/* Form */}
        <form className="w-full flex flex-col gap-6">

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900">
              <Phone className="text-purple-900 mr-2" size={20} />
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900">
              <Lock className="text-purple-900 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
              <Eye className="text-gray-400 cursor-pointer" size={20} />
            </div>

            <button onClick={() => navigate('/auth/forget')} className="text-right text-purple-900 text-sm ">
              Forget Password?
            </button>
          </div>

          <button type="button"  onClick={handlecontinue} className="mt-6 bg-purple-950 text-white py-4 rounded-full text-lg font-medium hover:bg-purple-900 transition">
            Continue
          </button>
        </form>

        <p className="mt-10 text-gray-500">
          Don't have an account?{" "}
          <span onClick={() => navigate('/auth/signup')} className="text-purple-900  hover:cursor-pointer  font-medium ">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;