import { useContext } from "react";
import { EVPage3context } from "../../../Context/Sidebar/Evcharge/Page3/EVpage3context";

import Page3 from "../../../ServiceDemoPages/Page3";


const EVpage3 = () => {

  const evpage3data=useContext(EVPage3context)

  return (
    <Page3 evpage3data={evpage3data}/>
  );
};

export default EVpage3;