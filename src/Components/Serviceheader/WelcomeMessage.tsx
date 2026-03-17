import { useLocation } from "react-router-dom";

const WelcomeMessage = () => {
const location=useLocation();
const path=location.pathname;
console.log(path)



    return (
<>
        {path!=="/towberbooked"  && path!=="/cancelride"  &&

         <div className="flex items-start p-3 gap-3 w-full pl-10">
            <img
                src="/images/person.gif"
                alt="Animated Person"
                className="w-12 sm:w-16 mt-1 shrink-0"
            />
            <div>
                <div className="bg-white border rounded-lg px-4 py-3 text-center max-w-100 relative border-gray-300">
                    <p className="text-black text-sm">
                        Welcome to Towber towing!!! We are here to help you out,
                        please select one of the following.
                    </p>
                    <span className="absolute -bottom-3.5 left-2.5 w-5 h-5 bg-white border-l border-b border-gray-300 rotate-45"></span>

                </div>
            </div>

        </div> }
        <div className="bg-blue-200 mx-5 p-3  m-3" >
            <h3 className="text-center" >Your Current Booking</h3>
            <div className="bg-white p-2.5" >
                <div className="flex  flex-wrap px-24   gap-20" >
                    <h2>Service</h2>
                    <h2>Driver</h2>
                    <h2>Status</h2>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
    );
};

export default WelcomeMessage;