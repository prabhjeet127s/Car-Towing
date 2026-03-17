import { useContext, useState } from "react";
import { Pagesswitchcontext } from "../Context/PagesSwitich/PageswitchContext";
import { EVchargepayload } from "../Context/Payload/EVcharge/EVchargepayload";




const Page2 = ({ evpage2data }) => {

  const [selected, setSelected] = useState("");
  const { page, setpage } = useContext(Pagesswitchcontext)
  const { servicefor, setservicefor } = useContext(EVchargepayload)

  const handleonclick = (value) => {
    setSelected(value)
    setpage(page + 1)
    setservicefor(value)
  }

  console.log(servicefor)


  return (
    <div className="px-6 py-5 w-full flex flex-col gap-6">
      <div className="flex justify-center gap-2">
        <img src="/images/step1.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/2.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/3.svg" alt="" />
      </div>

      {evpage2data.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 items-center">

          <h2 aria-required className="text-lg font-medium text-center">
            {item.title}
          </h2>

          <div className="flex flex-col gap-4 w-full items-center">
            {item.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleonclick(option.value)}
                className={`w-[70%] hover:bg-purple-900 hover:text-white  py-3 rounded-full border transition
                ${selected === option.value
                    ? "bg-purple-900 text-white"
                    : "bg-white text-black"
                  }`} >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Page2;