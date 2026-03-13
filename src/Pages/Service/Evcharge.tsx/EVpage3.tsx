import  { useContext, useState } from "react";
import { EVPage3context } from "../../../Context/Sidebar/Evcharge/Page3/EVpage3context";


const EVpage3 = () => {

  const [selected, setSelected] = useState("");
  const evpage3data=useContext(EVPage3context)
  

  return (
    <div className="px-6 pt-20 w-full flex flex-col gap-10">

      {/* Step Icons */}
      <div className="flex justify-center gap-2">
        <img src="/images/1.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/2.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/step3.svg" alt="" />
      </div>

      {evpage3data.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 items-center">

          <h2 className="text-lg font-medium text-center">
            {item.title}
          </h2>

          <div className="flex flex-col gap-4 w-full items-center">

            {item.options.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelected(option.value)}
                className={`w-[70%] py-3 rounded-full border transition hover:bg-purple-900 hover:text-white
                ${
                  selected === option.value
                    ? "bg-purple-900 text-white"
                    : "bg-white text-black"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EVpage3;