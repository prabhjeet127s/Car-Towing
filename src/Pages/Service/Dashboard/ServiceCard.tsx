import  { useContext } from "react";
import { Pagesswitchcontext } from "../../../Context/PagesSwitich/PageswitchContext";



const ServiceCard = ({ title, img }) => {


  const {page,setpage}=useContext(Pagesswitchcontext)

  return (
    <div   className="flex flex-col transition-transform duration-300 hover:scale-110  items-center gap-3 cursor-pointer">
      
      {/* Circle */}
      <div   onClick={()=>setpage(page+1)}  className="w-24 h-24  bg-purple-900 rounded-full flex items-center justify-center">
        <img  src={img} alt={title} className="w-18 h-18" />
      </div>

      {/* Title */}
      <p className="text-sm  font-medium text-black">
        {title}
      </p>

    </div>
  );
};

export default ServiceCard;