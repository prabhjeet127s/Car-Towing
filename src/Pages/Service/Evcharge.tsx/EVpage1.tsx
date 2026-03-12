import React, { useContext, useState } from "react";
import EVPage1context from "../../../Context/Sidebar/Evcharge/Page1/EVpage1context";

const EVpage1 = () => {

    const [answers, setAnswers] = useState({});
    const evpage1data=useContext(EVPage1context)

  

    const handleSelect = (id, value) => {
        setAnswers({ ...answers, [id]: value });
    };

    return (
        <div className="h-125    "    >
            <div className=" px-10 py-5  overflow-y-auto h-full flex flex-col gap-2">



                <div className=" flex flex-wrap justify-center  ">
                    <img src="/images/step1.svg" alt="" />
                    <img src="/images/dotted.svg" alt="" />
                    <img src="/images/2.svg" alt="" />
                    <img src="/images/dotted.svg" alt="" />
                    <img src="/images/3.svg" alt="" />
                </div>

                <h1 className="text-xl text-center font-semibold">
                    Enter Vehicle Information
                </h1>

                {evpage1data.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">

                        <label className="font-medium text-gray-800">
                            {item.title}
                            {item.type !== "select" && (
                                <span className="text-red-500 ml-1">*</span>
                            )}
                        </label>


                        {item.type === "select" && (
                            <select className="border rounded-xl bg-gray-200  px-4 py-3 w-full">
                                <option>Select an option</option>
                                {item.options.map((opt, index) => (
                                    <option key={index}>{opt}</option>
                                ))}
                            </select>
                        )}


                        {item.type === "button" && (
                            <div className="flex gap-3 flex-wrap">
                                {item.options.map((value, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(item.id, value)}
                                        className={`px-4 py-2 rounded-lg border 
                                              ${answers[item.id] === value
                                                 ? "bg-purple-900 text-white"
                                                : "bg-gray-200 text-black"
                                            }`}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <button className="w-full mt-6  bg-purple-900 rounded-2xl p-2 font-bold text-white"   > Continue</button>
            </div>
        </div>
    );
};

export default EVpage1;