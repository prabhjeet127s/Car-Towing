import { useContext} from "react";
import EVPage4context from "../../../Context/Sidebar/Evcharge/Page4/EVpage4context";


import Page4 from "../../../ServiceDemoPages/Page4";
import { useSelector } from "react-redux";



const EVpage4 = () => {
    
const evpage4data=useSelector((state:any)=>state.EVcharge4.evpage4data)
   // const evpage4data = useContext(EVPage4context)
    

    return (
        <Page4  evpage4data={evpage4data}  />
    
    );
};

export default EVpage4;