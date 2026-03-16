
import { useContext } from "react";
import EVPage2context from "../../../Context/Sidebar/Evcharge/Page2/EVpage2context";
import Page2 from "../../../ServiceDemoPages/Page2";

const EVpage2 = () => {


  const evpage2data=useContext(EVPage2context)
  

  return (
    <Page2  evpage2data={evpage2data}  />

  );
};

export default EVpage2;