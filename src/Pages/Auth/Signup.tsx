
import { User, Phone, Lock, Eye } from "lucide-react";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-[url('/images/background-image.png')] bg-cover bg-center  flex justify-center items-center">
      <div className="bg-white w-145 h-screen flex flex-col items-center pt-10 px-16 overflow-y-auto">
        
        <img className="w-28 mb-6" src="/images/logo.png" alt="logo" />
        <h2 className="text-2xl font-semibold mb-8">Sign Up</h2>

        <form className="w-full flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900">
              <User className="text-blue-900 mr-2" size={20} />
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900  ">
              <Phone className="text-purple-900 mr-2" size={20} />
              <input
                type="text"
                placeholder="Enter your number"
                className="w-full outline-none bg-transparent text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900">
              <Lock className="text-purple-900 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none bg-transparent text-gray-700"
              />
              <Eye className="text-gray-500 cursor-pointer" size={20} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-purple-900">
              <Lock className="text-purple-900 mr-2" size={20} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
              <Eye className="text-gray-400 cursor-pointer" size={20} />
            </div>
          </div>

          <button className="mt-6 bg-purple-950 text-white py-4 rounded-full text-lg font-medium hover:bg-purple-900 transition">
            Continue
          </button>
        </form>

        <p className="mt-8 text-gray-500 mb-10">
          Already have an account?{" "}
          <span className="text-purple-900 font-medium cursor-pointer">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;