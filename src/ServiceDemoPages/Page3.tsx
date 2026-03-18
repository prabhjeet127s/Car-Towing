import { useState } from "react";
//import { Pagesswitchcontext } from "../Context/PagesSwitich/PageswitchContext";
import { useDispatch, useSelector } from "react-redux";
import { setpage } from "../Redux/Slice/PageSwitichslice";



const Page3 = ({ evpage3data }) => {
  const dispatch = useDispatch()


  const page = useSelector(
    (state: any) => state.pageswitch.page
  )

  const [selected, setSelected] = useState("");
  //const { page, setpage } = useContext(Pagesswitchcontext)

  const handleonclick = (value) => {
    setSelected(value)
    dispatch(setpage(page + 1))
  }
  return (
    <div className="px-6 pt-20 w-full flex flex-col gap-10">

      {/* Step Icons */}
      <div className="flex justify-center gap-2">
        <img src="/images/1.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/step2.svg" alt="" />
        <img src="/images/dotted.svg" alt="" />
        <img src="/images/3.svg" alt="" />
      </div>

      {evpage3data.map((item) => (
        <form aria-required  action="">
        <div key={item.id} className="flex flex-col gap-4 items-center">

          <h2 aria-required className="text-lg font-medium text-center">
            {item.title}
          </h2>
          <div className="flex flex-col gap-4 w-full items-center">
            {item.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleonclick(option.value)}
                className={`w-[70%] py-3 rounded-full border transition hover:bg-purple-900 hover:text-white
                ${selected === option.value
                    ? "bg-purple-900 text-white"
                    : "bg-white text-black"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        </form>
      ))}
    </div>
  );
};

export default Page3;