import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EVchargepayload } from "../Context/Payload/EVcharge/EVchargepayload";



const Page4 = ({ evpage4data }) => {

    const navigate = useNavigate()

    const { vehiclelocation, setvehiclelocation } = useContext(EVchargepayload)

    const handlechange = (e) => {
        setvehiclelocation(e)

    }
    console.log(vehiclelocation)

    return (
        <div className="px-6 py-5 w-full flex flex-col gap-6">
            <div className="flex justify-center gap-2">
                <img src="/images/step1.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/step2.svg" alt="" />
                <img src="/images/dotted.svg" alt="" />
                <img src="/images/3.svg" alt="" />
            </div>
            {evpage4data.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 items-center w-full">

                    <h2 className="text-lg font-medium text-center">
                        {item.title}
                    </h2>
                    {item.type === "input" && (
                        <input
                            type="text"
                            placeholder={item.placeholder}
                            value={vehiclelocation}
                            onChange={(e) => handlechange(e.target.value)}
                            className="w-[80%] border rounded-full px-5 py-3 outline-none" />
                    )}
                    <button onClick={() => navigate('/userdetail')} className="w-[80%] bg-purple-900 text-white py-3 rounded-full">
                        Continue
                    </button>
                </div>
            ))}
        </div>
    );
};
export default Page4;