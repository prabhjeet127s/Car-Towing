import  { useContext } from "react";
import { Pagesswitchcontext } from "../../../Context/PagesSwitich/PageswitchContext";
import { setpage } from "../../../Redux/Slice/PageSwitichslice";
import { useDispatch, useSelector } from "react-redux";



const ServiceCard = ({ title, img }) => {

  const page=useSelector(
    (state:any)=>state.pageswitch.page
  )

  const dispatch=useDispatch();

  //const {page,setpage}=useContext(Pagesswitchcontext)








  return (
    <div   className="flex flex-col transition-transform duration-300 hover:scale-110  items-center gap-3 cursor-pointer">
      
      {/* Circle */}
      <div   onClick={()=>dispatch(setpage(page+1))}  className="w-24 h-24  bg-purple-900 rounded-full flex items-center justify-center">
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