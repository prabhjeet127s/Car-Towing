//import { useContext } from "react";
//import { EVPage3context } from "../../../Context/Sidebar/Evcharge/Page3/EVpage3context";

import Page3 from "../../../ServiceDemoPages/Page3";
import { useSelector } from "react-redux";


const EVpage3 = () => {

  //const evpage3data=useContext(EVPage3context)
  const evpage3data = useSelector((state: any) => state.EVcharge3.evpage3data

  )

  return (
    <Page3 evpage3data={evpage3data} />
  );
};

export default EVpage3;