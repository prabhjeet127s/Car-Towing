import React, { useContext, useState } from "react";
import EVPage2context from "../../../Context/Sidebar/Evcharge/Page2/EVpage2context";

const EVpage2 = () => {

  const [selected, setSelected] = useState("");
  const evpage2data=useContext(EVPage2context)


  return (
    <div className="px-6 py-5 w-full flex flex-col gap-6">

      {/* Steps */}
      <div className="flex justify-center gap-2">
        <img src="/images/1.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/step2.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/3.svg" alt="" />
      </div>

      {evpage2data.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 items-center">

          <h2 className="text-lg font-medium text-center">
            {item.title}
          </h2>

          <div className="flex flex-col gap-4 w-full items-center">

            {item.options.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelected(option.value)}
                className={`w-[70%] py-3 rounded-full border transition
                ${
                  selected === option.value
                    ? "bg-[#0b2d55] text-white"
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

export default EVpage2;